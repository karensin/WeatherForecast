import Weather from './component/weather'
import React, { useState, useEffect,useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import {Container, Button,InputGroup,Form, Col,FormControl, Row} from 'react-bootstrap';
 

//api.openweathermap.org/data/2.5/weather?q=London,uk
const API_Key = "d06db66101a950f6afc113f4474df923";

let location ={
  city: 'London'
}



function App() {
  const [currentTemp,setCurrentTemp] = useState()
  const [city, setCity] = useState(location.city);
  const [tempCity, setTempCity] = useState(location.city);
  const [tempMin, setTempMin] = useState(0);
  const [tempMax, setTempMax] = useState(0);
  const [description, getDescription] = useState()
  const [input, setInput] = useState('')
   function onChangeSearchCity(e){
    // console.log(e.target.value) 
    console.log(e.target.value)
    setInput(e.target.value)
  }
  function onSubmitSearchCity(e, name) {
    console.log('onSubmitSearchCity called')

    setTempCity(input)
    e.preventDefault()
    return false
  }

  useEffect(() => {
    console.log('useEffect called')
    const getWeather = async (e) => {
  
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${tempCity}&appid=${API_Key}`);
      

      const response = await api_call.json();
            console.log(response)

      if(response.cod!==200){
        return 

      } 
      setCity(tempCity)


      setTempMin(response.main.temp_min)
      
      setTempMax(response.main.temp_max)
           
      getDescription(response.weather[0].main)
       
      setCurrentTemp(response.main.temp)
    }
    getWeather();
  }, [tempCity]);
  // const data={
  //   description={description} 
  // }
  // console.log(setCity)
  return (

    <div className="App" >
      <header className="App-header">
        <Form onSubmit={onSubmitSearchCity}  >
          <Form.Row>
            <Col>
              <Form.Control onChange={onChangeSearchCity}  name="city" type="text" placeholder="City"> 
               </Form.Control >

            </Col>
            <Col>
              <Form.Control  placeholder="State" />
            </Col>
             <Button  variant="primary" type="submit">
                 Search
            </Button>
          </Form.Row>
        </Form>
        <Weather tempMin={tempMin} tempMax={tempMax} city={city}
          description={description} currentTemp={currentTemp}
         />
           </header>
       
    
     
    </div >
  );
}

export default App;


