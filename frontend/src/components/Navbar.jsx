import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// Importando ícones da react-icons
import { FaSeedling } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🌱 Projeto Empresa Sustentável</h2>
      <div className="links">
        <Link to="/">
          <FaSeedling /> Menu Principal
        </Link>
        <Link to="/cadastro">
          <FaSeedling /> Cadastro ação sustentavel
        </Link>
        <Link to="/ranking">
          <FaSeedling /> Ranking
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
