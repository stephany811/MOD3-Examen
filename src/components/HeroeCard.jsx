import React from 'react';
import './HeroeCard.css';


export default function HeroeCard({ heroe, esFavorito, alAlternarFavorito }) {
 
  const iniciales = heroe.nombre.split(' ').map(n => n[0]).join('');

  return (
    <div className={`heroe-card ${esFavorito ? 'favorito' : ''}`}>
       
       <div className="heroe-image-contenedor">
        <img 
          src={heroe.image} 
          alt={heroe.nombre} 
          className="heroe-image" 
        />
      </div>
      <h3>{heroe.nombre}</h3>
      <p className="poder">{heroe.poder}</p>
      <span className="categoria">{heroe.categoria}</span>
      
      <button 
        className={`btn-favorito ${esFavorito ? 'activo' : ''}`} 
        onClick={() => alAlternarFavorito(heroe.id)}
      >
        {esFavorito ? '♥ Favorito' : '♡ Favorito'}
      </button>
    </div>
  );
}
