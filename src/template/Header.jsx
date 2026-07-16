import React from 'react';
import '../assets/Header.css'; 
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    // Kita paksa background gelap transparan langsung di tag-nya lewat atribut style
    <header 
      className="simple-header" 
      style={{ 
        backgroundColor: 'rgba(5, 11, 10, 0.85)', 
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(16, 185, 129, 0.15)'
      }}
    >
      <div className="header-container">
        {/* Teks logo dipaksa warna putih murni dengan dot hijau */}
        <h1 className="header-logo" style={{ color: '#ffffff' }}>
          KantinArpa<span style={{ color: '#10b981' }}>.</span>
        </h1>
        
        <nav className="header-nav">
          <Link to="/" style={{ color: '#94a3b8' }}>Home</Link>
          <Link to="/about" style={{ color: '#94a3b8' }}>About</Link>
          <Link to="/product" style={{ color: '#94a3b8' }}>Product</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;