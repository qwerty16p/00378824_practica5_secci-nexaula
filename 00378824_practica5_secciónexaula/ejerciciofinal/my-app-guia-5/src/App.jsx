import React from 'react';
import Cientifico from './Cientifico';
import './App.css'; // Importamos los estilos

// URLs de las imágenes (puedes buscar otras si lo deseas)
const urlCurie = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/440px-Marie_Curie_c._1920s.jpg";
const urlSaruhashi = "https://i.prcdn.co/img?regionKey=2097059030";

function App() {
  const datosCientificos = [
    {
      nombre: 'Maria Skłodowska-Curie',
      profesion: 'física y química',
      premios: '4 (Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci)',
      descubrio: 'polonio (elemento químico)',
      imagenUrl: urlCurie
    },
    {
      nombre: 'Katsuko Saruhashi',
      profesion: 'geoquímica',
      premios: '2 (Premio Miyake de geoquímica, Premio Tanaka)',
      descubrio: 'un método para medir el dióxido de carbono en el agua de mar',
      imagenUrl: urlSaruhashi
    }
  ];

  return (
    <div className="container">
      <h1>Científicos Notables</h1>
      {datosCientificos.map((cientifico, index) => (
        <Cientifico
          key={index}
          nombre={cientifico.nombre}
          profesion={cientifico.profesion}
          premios={cientifico.premios}
          descubrio={cientifico.descubrio}
          imagenUrl={cientifico.imagenUrl}
        />
      ))}
    </div>
  );
}

export default App;