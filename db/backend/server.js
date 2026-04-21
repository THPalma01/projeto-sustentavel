const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const PORT = 3001;
app.use(cors());
app.use(bodyParser.json());

const validarCnpj = (cnpj) => {
  const regex = /^[0-9]{14}$/;
  return regex.test(cnpj);
};

app.get('/acoes', (req, res) => {
  const query = 'SELECT * FROM acoes ORDER BY pontos DESC'; 
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao buscar ações', error: err.message });
    }
    res.json(rows);
  });
});
app.post('/acoes', (req, res) => {
  const { nome_empresa, cnpj, acao_sustentavel, pontos } = req.body;

  if (!nome_empresa || !cnpj || !acao_sustentavel || pontos == null) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios (incluindo pontos)' });
  }

  if (!validarCnpj(cnpj)) {
    return res.status(400).json({ message: 'CNPJ inválido. Deve conter 14 dígitos numéricos.' });
  }
  const queryVerificaCnpj = 'SELECT * FROM acoes WHERE cnpj = ?';
  db.get(queryVerificaCnpj, [cnpj], (err, row) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao verificar o CNPJ', error: err.message });
    }

    if (row) {
      const pontosAcumulados = row.pontos + pontos;
      const updateQuery = 'UPDATE acoes SET pontos = ? WHERE cnpj = ?';
      db.run(updateQuery, [pontosAcumulados, cnpj], function(err) {
        if (err) {
          return res.status(500).json({ message: 'Erro ao atualizar pontos', error: err.message });
        }
        res.json({ message: 'Pontos acumulados com sucesso!' });
      });
    } else {
      const queryInserir = `
        INSERT INTO acoes (nome_empresa, cnpj, acao_sustentavel, pontos)
        VALUES (?, ?, ?, ?)
      `;
      db.run(queryInserir, [nome_empresa, cnpj, acao_sustentavel, pontos], function(err) {
        if (err) {
          return res.status(500).json({ message: 'Erro ao cadastrar ação', error: err.message });
        }
        res.json({ id: this.lastID, nome_empresa, cnpj, acao_sustentavel, pontos });
      });
    }
  });
});
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
