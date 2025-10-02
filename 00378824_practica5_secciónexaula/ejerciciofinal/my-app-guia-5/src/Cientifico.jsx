import React from 'react';

function Cientifico({ nombre, profesion, premios, descubrio, imagenUrl }) {
return (
    <div className="card">
    <img src={imagenUrl} alt={`Retrato de ${nombre}`} className="avatar" />
    <div className="info">
        <h2>{nombre}</h2>
        <ul>
        <li><strong>Profesión:</strong> {profesion}</li>
        <li><strong>Premios:</strong> {premios}</li>
        <li><strong>Descubrió:</strong> {descubrio}</li>
        </ul>
    </div>
    </div>
);
}

export default Cientifico;