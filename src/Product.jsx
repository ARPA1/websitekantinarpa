import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './template/Header';
import CardFood from './template/CardFood'; 
import Footer from './template/Footer'; // Impor footer agar konsisten
import './assets/product.css'; // Memanggil file CSS eksternal baru

const Product = () => {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);

  const ambilData = async () => {
    try {
      const response = await axios.get("https://api.jsonbin.io/v3/b/6a501d74f5f4af5e2979cd04");
      console.log("Data berhasil diambil:", response.data.record.products);
      setFood(response.data.record.products);
      setLoading(false);
    } catch (error) {
      console.error("Terjadi error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    ambilData();
  }, []); 

  return (
    <div className="product-page">
      <Header />
      
      <main className="product-main">
        {/* Bagian Judul Katalog Menu */}
        <div className="product-header">
          <span className="product-tag">🛒 Fresh & Tasty</span>
          <h2 className="product-title">Daftar Menu Kantin</h2>
          <p className="product-subtitle">
            Pilih makanan dan minuman favorit lu. Semua hidangan diolah langsung 
            setiap hari demi menjaga kesegaran rasa.
          </p>
        </div>
        
        {loading ? (
          /* Animasi Loading Spinner Minimalis */
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Memuat menu lezat untukmu...</p>
          </div>
        ) : (
          /* Grid Container Utama untuk CardFood */
          <div className="product-grid">
            {food.map((i, index) => (
              <CardFood key={index} item={i} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Product;