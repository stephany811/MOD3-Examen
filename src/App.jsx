import React, { useState, useEffect } from 'react';
import HeroeCard from './components/HeroeCard.jsx';
import './App.css';


export default function App() {

  const [heroes, setHeroes] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [favoritos, setFavoritos] = useState([]); 

  
  useEffect(() => {
    fetch('/heroes.json')
      .then((res) => res.json())
      .then((data) => setHeroes(data));
  }, []);

  
  const alternarFavorito = (id) => {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((favId) => favId !== id));
    } else {
      setFavoritos([...favoritos, id]);
    }
  };

 
  const heroesFiltrados = heroes.filter((heroe) =>
    heroe.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="app-container">
      <header>
        <h1>Superhéroes</h1>
        <input
          type="text"
          placeholder="Buscar héroe..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="buscador-input"
        />
      </header>

      {}
      {heroesFiltrados.length === 0 ? (
        <p className="no-resultados">No se encontraron héroes</p>
      ) : (
        <div className="heroes-grid">
          {heroesFiltrados.map((heroe) => (
            <HeroeCard
              key={heroe.id}
              heroe={heroe}
              esFavorito={favoritos.includes(heroe.id)}
              alAlternarFavorito={alternarFavorito}
            />
          ))}
        </div>
      )}
    </div>
  );
}
