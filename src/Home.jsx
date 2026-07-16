import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './template/Header'; 
import CardFood from './template/CardFood'; // Kita pakai CardFood asli lu biar konsisten tampilannya
import Footer from './template/Footer';
import './assets/home.css';

const Home = () => {
  const [featuredFood, setFeaturedFood] = useState([]);
  const [loading, setLoading] = useState(true);

  const ambilDataHome = async () => {
    try {
      const response = await axios.get("https://api.jsonbin.io/v3/b/6a501d74f5f4af5e2979cd04");
      const allProducts = response.data.record.products;
      
      // Ambil 2 atau 3 produk pertama saja dari API untuk pajangan di Home
      const saringMenuAndalan = allProducts.slice(0, 2); 
      
      setFeaturedFood(saringMenuAndalan);
      setLoading(false);
    } catch (error) {
      console.error("Gagal memuat data menu andalan:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    ambilDataHome();
  }, []);

  return (
    <div className="home-page">
      <Header />

      <main className="home-main">
        {/* 1. Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <span className="hero-badge">🍽️ Kantin Sekolah Ter-Hits</span>
            <h1 className="hero-title">
              Makan Enak, <br />
              Kantong <span className="highlight">Tetep Aman.</span>
            </h1>
            <p className="hero-subtitle">
              Ngemil santai atau makan berat abis kelas? Semuanya ada di KantinArpa. 
              Bahan segar setiap hari, rasa bintang lima, harga anak sekolah.
            </p>
            <div className="hero-actions">
              <a href="/product" className="btn btn-primary">Lihat Menu</a>
              <a href="#features" className="btn btn-secondary">Kenapa Kami?</a>
            </div>
          </div>
          <div className="hero-image-container">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" 
              alt="Suasana Kantin Modern" 
              className="hero-img"
            />
          </div>
        </section>

        {/* 2. Features Section */}
        <section id="features" className="features-section">
          <div className="section-header">
            <h2>Kenapa Harus Nongkrong di Sini?</h2>
            <p>Fasilitas terbaik buat nemenin jam istirahat atau nugas lu.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3>Bahan Higienis</h3>
              <p>Semua makanan dimasak fresh tiap pagi dengan standar kebersihan yang ketat.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Pelayanan Kilat</h3>
              <p>Ga perlu takut telat masuk kelas, sistem antrean kami cepet dan teratur.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📶</div>
              <h3>Free Wi-Fi</h3>
              <p>Ngerjain tugas, push rank, atau sekadar scrolling jadi lancar jaya.</p>
            </div>
          </div>
        </section>

        {/* 3. Real-Data Preview Section (Today's Special) */}
        <section className="preview-section">
          <div className="preview-header">
            <div className="preview-title-area">
              <span className="preview-tag">🔥 Rekomendasi Hari Ini</span>
              <h2>Menu Andalan Paling Dicari</h2>
            </div>
            <a href="/product" className="view-all-link">Lihat Semua Menu &rarr;</a>
          </div>

          {loading ? (
            <p style={{ color: '#94a3b8', textAlign: 'center' }}>Memuat menu andalan...</p>
          ) : (
            
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {featuredFood.map((i, index) => (
                <CardFood key={index} item={i} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;