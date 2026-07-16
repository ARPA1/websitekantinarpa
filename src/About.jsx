import React from 'react';
import Header from './template/Header';
import Footer from './template/Footer'; // Import footer agar layout konsisten
import './assets/about.css';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      
      <main className="about-main">
        {/* Section Utama About */}
        <section className="about-section">
          <div className="about-container">
            <span className="about-tag">📖 Cerita Kami</span>
            <h2 className="about-title">Tentang Kantin Arpa</h2>
            
            <div className="about-content-layout">
              <div className="about-text-block">
                <p className="about-text">
                  Kantin Arpa didirikan dari sebuah ide sederhana: menyediakan makanan berkualitas bintang lima dengan harga yang ramah di kantong pelajar. Kami memahami bahwa jam istirahat sekolah adalah momen krusial untuk mengisi ulang energi sekaligus melepas penat setelah berjam-jam fokus belajar di kelas.
                </p>
                <p className="about-text">
                  Bukan sekadar tempat mengisi perut, kami berkomitmen membangun sebuah ekosistem nongkrong yang nyaman. Dengan memadukan cita rasa lokal, standar kebersihan yang ketat, serta fasilitas modern seperti koneksi internet cepat, Kantin Arpa menjadi pilihan utama bagi para siswa untuk bersantai, berdiskusi, hingga menyelesaikan tugas kelompok.
                </p>
              </div>

              {/* Grid Statistik Pendukung */}
              <div className="about-stats-grid">
                <div className="stat-card">
                  <h3>50+</h3>
                  <p>Menu Varian</p>
                </div>
                <div className="stat-card">
                  <h3>100%</h3>
                  <p>Bahan Fresh</p>
                </div>
                <div className="stat-card">
                  <h3>1K+</h3>
                  <p>Pelanggan Puas</p>
                </div>
                <div className="stat-card">
                  <h3>4.9</h3>
                  <p>Rating Rasa</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Tambahan: Nilai Utama / Visi Misi */}
        <section className="values-section">
          <div className="values-container">
            <h3 className="values-title">Pilar Utama Layanan Kami</h3>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h4>Kualitas Terjangkau</h4>
                <p>Menghadirkan hidangan lezat menggunakan bahan baku segar harian tanpa harus menguras isi dompet siswa.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🛡️</div>
                <h4>Higienis Mutlak</h4>
                <p>Setiap proses pengolahan makanan diawasi ketat demi memastikan kebersihan dan kesehatan di setiap suapan.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🚀</div>
                <h4>Kenyamanan Digital</h4>
                <p>Menyediakan lingkungan suportif lengkap dengan Free Wi-Fi yang andal untuk mendukung aktivitas belajar produktif.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;