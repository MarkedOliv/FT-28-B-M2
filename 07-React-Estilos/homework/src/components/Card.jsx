import React from 'react';
import s from './Card.module.css';

function Card( ciudad ) {
  let source = `http://openweathermap.org/img/wn/${ciudad.img}@2x.png`
  return (
  <div>
    <div className={s.firstCon}>
      <h3 className={s.title}>{ciudad.name}</h3>
      <button className={s.xButton} onClick={ciudad.onClose}>X</button>
    </div>
    <div className={s.divContainer}>
      <div className={s.temp}>
        <p>Max:</p>
        <p>{ciudad.max}</p>
      </div>
      <div className={s.temp}>
        <p>Min:</p>
        <p>{ciudad.min}</p>
      </div>
      <img src={source} alt={ciudad.name}/>
    </div>
  </div>
  )
};

export default Card;