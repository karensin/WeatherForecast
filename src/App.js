import Weather from './component/weather'
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import { Container, Button, InputGroup, Form, Col, FormControl, Row } from 'react-bootstrap';
import Forecast from './component/Forecast';


//api.openweathermap.org/data/2.5/weather?q=London,uk
const API_Key = "d06db66101a950f6afc113f4474df923";

let location = {
    city: 'San Francisco',
}

export const icon1 = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"
};


function App() {
    const [currentTemp, setCurrentTemp] = useState()
    const [city, setCity] = useState(location.city);
    const [tempCity, setTempCity] = useState(location.city);
    const [tempMin, setTempMin] = useState(0);
    const [tempMax, setTempMax] = useState(0);
    const [description, getDescription] = useState()
    const [input, setInput] = useState('')
    const [icon, setIcon] = useState('')

    function onChangeSearchCity(e) {

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
        const getCurrentWeather = async (e) => {

            const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${tempCity}&appid=${API_Key}`);
            //5 day forecast is available at any location or city. It includes weather data every 3 hours.

            //
            const response = await api_call.json();
            // console.log(response)

            if (response.cod !== 200) {
                return


            }
            console.log(response)
            setCity(tempCity)

            setTempMin(response.main.temp_min)

            setTempMax(response.main.temp_max)

            getDescription(response.weather[0].description)

            setCurrentTemp(response.main.temp)

            setIcon(response.weather[0].main)


        }
        getCurrentWeather();
    }, [tempCity]);
    // const data={
    //   description={description} 
    // }
    // console.log(setCity)

    return (
        <div className="App " >
            <header className="App-header background" role="main" style={{
                background: `url("${process.env.PUBLIC_URL + '/img/background.jpg'}") no-repeat center / cover `
            }}  >
                <Container  >
                    <Form onSubmit={onSubmitSearchCity}  >
                        <Form.Row className="px-4 d-flexcenter">
                            <Col className="pd-25">
                                <Form.Control onChange={onChangeSearchCity} name="city" type="text" placeholder="City">
                                </Form.Control >
                            </Col>
                            <Button variant="light" size="md" type="submit">
                                Search
            </Button>
                        </Form.Row>
                    </Form>
                    <Weather icon={icon1[icon]} tempMin={tempMin} tempMax={tempMax} city={city}
                        description={description} currentTemp={currentTemp}
                    />
                </Container>

            </header>

            <Forecast tempCity={tempCity} />

        </div >
    );
}

export default App;


