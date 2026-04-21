import React from 'react';
import fundoImg from '../styles/Fundo.jpg'; 

const Home = () => {
  return (
    <div
      className="home-container"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#367221', 
        padding: '3rem 2rem',
        gap: '2rem',
        color: 'white', // Fonte branca para todo o conteúdo
      }}
    >
      {/* Texto do lado esquerdo */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>
          Bem-vindo à Página de Ações Sustentáveis
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          Neste site, você cadastra sua empresa de acordo com suas ações sustentáveis realizadas. Para cada ação você ganha pontos verdes. A empresa com mais pontos verdes ganha um selo de "Empresa Mais Sustentável do Mundo".
          <br /><br />
          Junte-se a nós na construção de um futuro mais verde🌱
        </p>
      </div>

      {/* Imagem do lado direito */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <img
          src={fundoImg}
          alt="Imagem sustentável"
          style={{ maxWidth: '100%', maxHeight: '70vh', borderRadius: '10px' }}
        />
      </div>
    </div>
  );
};

export default Home;
