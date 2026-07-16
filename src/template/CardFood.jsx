import React from 'react';
import '../assets/cardfood.css'; // Import file CSS eksternal baru

const CardFood = (props) => {
  return (
    <div className="food-card">
      {/* Container Gambar */}
      <div className="food-img-container">
        <img src={props.item.imageUrl} alt={props.item.name} className="food-img" />
      </div>
      
      {/* Konten Detail */}
      <div className="food-info">
        <h4 className="food-name">{props.item.name}</h4> 
        <p className="food-price">{props.item.price}</p>
        
        {/* Kontainer Tags / Badge */}
        <div className="food-tags">
          {props.item.tags.map((tag, index) => (
            <span className="food-tag-badge" key={index}>
              {tag}
            </span>
          ))}
        </div>
        
        {/* Tambahan tombol aksi biar makin interaktif */}
        <button className="food-btn">Pesan Sekarang</button>
      </div>
    </div>
  );
};

export default CardFood;