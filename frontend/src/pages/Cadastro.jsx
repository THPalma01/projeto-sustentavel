import React, { useEffect, useState } from 'react';
import axios from 'axios';
import fundoImg from '../styles/pilar.webp';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [acaoSustentavel, setAcaoSustentavel] = useState('');
  const [pontos, setPontos] = useState('');
  const [editandoId, setEditandoId] = useState(null);

  const acoesPontuadas = {
    'Implantar Coleta Seletiva': 10,
    'Reduzir e Reutilizar Materiais': 15,
    'Implantação de Árvores': 20,
    'Gestão de Resíduos Perigosos': 25,
    'Compras Sustentáveis': 30,
    'Compensação de Carbono': 50,
  };

  useEffect(() => {}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cnpj.length !== 14 || isNaN(cnpj)) {
      return alert('CNPJ deve conter exatamente 14 números.');
    }

    const dados = {
      nome_empresa: nome,
      cnpj: cnpj,
      acao_sustentavel: acaoSustentavel,
      pontos: parseInt(pontos),
    };

    try {
      await axios.post('http://localhost:3001/acoes', dados);
      setNome('');
      setCnpj('');
      setAcaoSustentavel('');
      setPontos('');
      setEditandoId(null);
    } catch (err) {
      console.error('Erro ao salvar:', err);
      alert('Erro ao salvar. Verifique os dados e tente novamente.');
    }
  };

  const handleAcaoChange = (e) => {
    const acao = e.target.value;
    setAcaoSustentavel(acao);
    setPontos(acoesPontuadas[acao] || 0);
  };

  return (
    <div
      className="cadastro-container"
      style={{
        backgroundColor: '#008000',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '3rem 2rem',
        gap: '2rem',
      }}
    >
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <img
          src={fundoImg}
          alt="Sustentabilidade"
          style={{ maxWidth: '100%', maxHeight: '70vh', borderRadius: '10px' }}
        />
      </div>

      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
          Cadastro de Ação Sustentável 🌱
        </h2>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Nome da Empresa"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="CNPJ (somente números, 14 dígitos)"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value.replace(/\D/g, ''))}
            required
            maxLength={14}
          />
          <select
            value={acaoSustentavel}
            onChange={handleAcaoChange}
            required
          >
            <option value="">Selecione uma Ação Sustentável</option>
            <option value="Implantar Coleta Seletiva">Implantar Coleta Seletiva</option>
            <option value="Reduzir e Reutilizar Materiais">Reduzir e Reutilizar Materiais</option>
            <option value="Implantação de Árvores">Implantação de Árvores</option>
            <option value="Gestão de Resíduos Perigosos">Gestão de Resíduos Perigosos</option>
            <option value="Compras Sustentáveis">Compras Sustentáveis</option>
            <option value="Compensação de Carbono">Compensação de Carbono</option>
          </select>
          <input
            type="number"
            placeholder="Pontuação"
            value={pontos}
            readOnly
          />
          <button type="submit">{editandoId ? 'Atualizar' : 'Cadastrar'}</button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
