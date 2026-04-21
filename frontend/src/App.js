import './styles/App.css';
import Navbar from './components/Navbar';  
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Ranking from './pages/Ranking';
function App() {
  return (
    <Router>
      <Navbar />  {/* ✅ Aqui você adiciona o Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </Router>
  );
}

export default App;

