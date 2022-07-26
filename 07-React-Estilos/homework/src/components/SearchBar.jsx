import React from 'react';
import s from './SearchBar.module.css';

export default function SearchBar( props ) {
  // acá va tu código
  return <div>
        <input type='search' placeholder='Ciudad...' className={s.input}/>
        <button onDoubleClick={() => props.onSearch('Buscando...')} className={s.addButton}>Agregar</button>
        </div>
};