import React from 'react';
import Card from './Card';

export default function Cards( obj ) {
  // acá va tu código
  // tip, podés usar un map
  if(!obj.cities) return <h3> No hay ciudades </h3>
  return <div>
            {
              obj.cities.map(ciudad => (
                <Card key={ciudad.name} name={ciudad.name} max={ciudad.main['temp_max']} min={ciudad.main['temp_min']} img={ciudad.weather[0].icon} onClose={() => alert(ciudad.name)}
                />
              ))
            } 
        </div>
};