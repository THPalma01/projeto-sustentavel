const sqlite3 = require('sqlite3').verbose(); 
const db = new sqlite3.Database('./projeto_sustentavel.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
  }
});
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS acoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_empresa TEXT NOT NULL,
    cnpj TEXT NOT NULL,
    acao_sustentavel TEXT NOT NULL,
    pontos INTEGER NOT NULL
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS ranking (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_empresa TEXT NOT NULL,
    pontos INTEGER NOT NULL
  )`);
});

module.exports = db; 