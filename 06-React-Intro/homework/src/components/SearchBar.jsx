import React from 'react';

export default function SearchBar( props ) {
  // acá va tu código
  return <div>
        <input type='search' placeholder='Ciudad...' />
        <button onDoubleClick={() => props.onSearch('Buscando...')}>Agregar</button>
        </div>
};