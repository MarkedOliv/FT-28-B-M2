import React from 'react';

export default function Card( ciudad ) {
  // acá va tu código
   // obtener el valor en grados
  let source = `http://openweathermap.org/img/wn/${ciudad.img}@2x.png`
  return <div>
          <button onClick={ciudad.onClose}>X</button>
          <h3>{ciudad.name}</h3>
          <div>
            <p>Max:</p>
            <p>{ciudad.max} </p>
          </div>
          <div>
            <p>Min:</p>
            <p>{ciudad.min}</p>
          </div>
          <img src={source} alt={ciudad.name}/>
        </div>
};