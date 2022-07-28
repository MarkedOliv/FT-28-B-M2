import React, { useState } from 'react'
import Nav from './components/Nav/Nav'
import Cards from './components/Cards/Cards'
import './App.css';

export default function App() {
  const [cities, setCities] = useState([]);
  const apiKey = 'b3c0016c886a9a4381a671a9e9daaf85';
  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if(json.main !== undefined){
          const city = {
            min: Math.round(json.main.temp_min),
            max: Math.round(json.main.temp_max),
            img: json.weather[0].icon,
            id: json.id,
            wind: json.wind.speed,
            temp: json.main.temp,
            name: json.name,
            weather: json.weather[0].main,
            clouds: json.clouds.all,
            latitud: json.coord.lat,
            longitud: json.coord.lon
          };
          setCities(oldCities => [...oldCities, city]);
        } else {
          alert("Ciudad no encontrada");
        }
      })
  }

  function onClose(id){
    setCities(oldCities => oldCities.filter(c => c.id !== id))
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch}></Nav>
      <Cards cities={cities} onClose={onClose}></Cards>
    </div>
  );
}
