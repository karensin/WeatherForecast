import Weather from './component/weather'
import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css'

//api.openweathermap.org/data/2.5/weather?q=London,uk
const API_Key = "d06db66101a950f6afc113f4474df923";



function App() {
  const [city, getCity] = useState();
  const [tempMin, setTempMin] = useState(0);
  const [tempMax, setTempMax] = useState(0);

  useEffect(() => {
    const getWeather = async () => {

      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_Key}`);

      const response = await api_call.json();
      console.log(response)

      setTempMin(response.main.temp_min)
      setTempMax(response.main.temp_max)
      getCity(response.name)
    }
    getWeather();
  }, []);

  function calCelsius(newTemp) {
    let cell = Math.floor(newTemp - 273.15);
    return cell;
  }

  // console.log(setCity)
  return (

    < div className="App" >
      <header className="App-header">
        <Weather tempMin={tempMin} tempMax={tempMax} city={city} />
      </header>
    </div >
  );
}

export default App;


