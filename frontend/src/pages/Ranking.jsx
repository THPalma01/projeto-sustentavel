import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Ranking() {
  const [acoes, setAcoes] = useState([]);
  const buscarAcoes = async () => {
    try {
      const resposta = await axios.get('http://localhost:3001/acoes');
      const acoesOrdenadas = resposta.data.sort((a, b) => b.pontos - a.pontos); 
      setAcoes(acoesOrdenadas);
    } catch (error) {
      console.error('Erro ao carregar as ações:', error);
      alert('Erro ao carregar as ações. Verifique o servidor.');
    }
  };

  useEffect(() => {
    buscarAcoes();  
  }, []);  

  const limparDados = () => {
    setAcoes([]);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '90vh',
        paddingTop: '40px',
        backgroundColor: '#f0f0f0',
      }}
    >
      <h1 style={{ color: '#2e7d32' }}>Ranking das Empresas Mais Sustentáveis🌱</h1>

      {acoes.length === 0 ? (
        <p>Nenhuma ação cadastrada ainda.</p>
      ) : (
        <table
          style={{
            width: '80%',
            textAlign: 'center',
            borderCollapse: 'collapse',
            backgroundColor: '#fff',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            border: '2px solid #2e7d32',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#a5d6a7' }}>
              <th style={{ border: '1px solid #2e7d32' }}>Posição</th>
              <th style={{ border: '1px solid #2e7d32' }}>Empresa</th>
              <th style={{ border: '1px solid #2e7d32' }}>Pontuação</th>
            </tr>
          </thead>
          <tbody>
            {acoes.slice(0, 3).map((acao, index) => (
              <tr key={acao.id}>
                <td style={{ border: '1px solid #2e7d32' }}>{index + 1}º</td>
                <td style={{ border: '1px solid #2e7d32' }}>{acao.nome_empresa}</td>
                <td style={{ border: '1px solid #2e7d32' }}>{acao.pontos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Botão para limpar os dados */}
      <button
        onClick={limparDados}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Limpar Ranking
      </button>
    </div>
  );
}

export default Ranking;
