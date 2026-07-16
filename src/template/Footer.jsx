import React from 'react';
import '../assets/Footer.css'; // Mengambil CSS dari folder assets

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Sisi Kiri: Brand/Logo */}
        <div className="footer-brand">
          <h2 className="footer-logo">Arpa<span>.</span></h2>
          <p className="footer-tagline">Tempat nongkrong & makan asik pilihan utama.</p>
        </div>

        {/* Sisi Kanan: Copyright */}
        <div className="footer-copyright">
          <p>&copy; 2026 Arpa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;