import Weather from './component/weather'
import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import { Container, Button, Form, Col } from 'react-bootstrap';
import Forecast from './component/Forecast';
import Toggle from 'react-bootstrap-toggle';
import Footer from './component/Footer';


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

const Scales = {
    KELVIN: 'kelvin',
    CELSIUS: 'celsius',
    FAHRENHEIT: 'fahrenheit'
}

export function getFahrenheit(newTemp) {
    const cell = calCelsius(newTemp)
    return Math.floor(cell * (9 / 5) + 32);
}

export function calCelsius(newTemp) {
    let cell = Math.floor(newTemp - 273.15);
    return cell;
}

const daysString = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tues',
    3: 'Wed',
    4: 'Thurs',
    5: 'Fri',
    6: 'Sat',
}

function App() {
    const [currentTemp, setCurrentTemp] = useState()
    const [city, setCity] = useState(location.city);
    const [tempCity, setTempCity] = useState(location.city);
    const [tempMin, setTempMin] = useState(0);
    const [tempMax, setTempMax] = useState(0);
    const [description, setDescription] = useState()
    const [descriptions, setDescriptions] = useState([])
    const [weatherMain, setWeatherMain] = useState('')
    const [input, setInput] = useState('')
    const [icon, setIcon] = useState('')
    const [tempScale, setTempScale] = useState(Scales.FAHRENHEIT)

    const [day, setDay] = useState([])
    const [tempMins, setTempMins] = useState([]);
    const [tempMaxes, setTempMaxes] = useState([]);
    const [toggleActive, setToggleActive] = useState(true);

    function convertTemp(temp) {
        let dec = ''
        let newTemp

        if (tempScale === Scales.CELSIUS) {
            newTemp = calCelsius(temp)
            dec = 'C'
        }
        if (tempScale === Scales.FAHRENHEIT) {
            newTemp = getFahrenheit(temp)
            dec = 'F'
        }
        if (tempScale === Scales.KELVIN) {
            newTemp = temp
        }
        return (
            <div>
                {newTemp} {dec} &deg;
            </div>
        );
    }

    function onToggle() {
        let newState = !toggleActive
        let newTempScale = newState ? Scales.FAHRENHEIT : Scales.CELSIUS;
        setTempScale(newTempScale)
        setToggleActive(!toggleActive)
    }

    function onChangeSearchCity(e) {
        setInput(e.target.value)
    }
    function onSubmitSearchCity(e, name) {
        setTempCity(input)
        e.preventDefault()
        return false
    }

    useEffect(() => {
        const getCurrentWeather = async (e) => {
            const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${tempCity}&appid=${API_Key}`);
            //5 day forecast is available at any location or city. It includes weather data every 3 hours.

            const response = await api_call.json();

            if (response.cod !== 200) {
                return
            }
            console.log(response)
            setCity(response.name)
            setTempMin(response.main.temp_min)
            setTempMax(response.main.temp_max)
            setDescription(response.weather[0].description)
            setWeatherMain(response.weather[0].main)
            setCurrentTemp(response.main.temp)
            setIcon(response.weather[0].main)
        }

        const getforecast = async (e) => {
            //5 day forecast is available at any location or city. It includes weather data every 3 hours.
            const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${tempCity}&appid=${API_Key}`);
            //
            const response = await api_call.json();
            console.log(response)

            if (response.cod !== "200") {
                return
            }

            function getdate() {
                let fiveDay = []
                let getToday = new Date()
                let day1 = getToday.getDay()
                for (let i = day1; i < day1 + 5; i++) {
                    let k = i
                    if (k >= 7) {
                        k = k - 7
                    }
                    fiveDay.push(daysString[i])
                }
                return fiveDay
            }

            const forecast = getdate()

            setDay([...forecast])

            function splitDays(array, size) {
                let days = []
                let index = 0;
                while (index < array.length) {
                    days.push(array.slice(index, size + index));
                    index += size;
                }
                return days;
            }

            let days = splitDays(response.list, 8)

            function findMin(days) {
                let day_min = []
                for (let i = 0; i < days.length; i++) {
                    let day = days[i]
                    let hours = day.map(hour => hour.main.temp_min)

                    let min = Math.min(...hours)
                    day_min.push({ min: min });
                }
                return day_min;
            }

            function findMax(days) {
                let day_max = [];
                for (let i = 0; i < days.length; i++) {
                    let day = days[i]
                    let hours = day.map(hour => hour.main.temp_max)

                    let max = Math.max(...hours)
                    day_max.push({ max: max });
                }
                return day_max;
            }

            const desList = [days[0][0].weather[0].main, days[1][0].weather[0].main, days[2][0].weather[0].main, days[3][0].weather[0].main, days[4][0].weather[0].main]
            const min = findMin(days).map(item => item.min)
            const max = findMax(days).map(item => item.max)

            setTempMins([...min])
            setTempMaxes([...max])
            setDescriptions([...desList])
        }
        getforecast();
        getCurrentWeather();
    }, [tempCity]);

    const min_divs = tempMins.map(item => <div>{convertTemp(item)}</div>)
    const max_divs = tempMaxes.map(item => <div> {convertTemp(item)} </div>)

    let backgroundUrl = '/img/blue-and-white-milky-way.jpg';
    switch (weatherMain.toLowerCase()) {
        case 'drizzle':
        case 'rain':
            backgroundUrl = '/img/rain_background.jpg';
            break;
        case 'clouds':
            backgroundUrl = '/img/cloudy2.jpg';
            break;
        case 'clear':
        case 'sunny':
            backgroundUrl = '/img/sunny_background.jpg';
            break;
        case 'snow':
            backgroundUrl = '/img/snow.jpg';
            break;
        default:
            break;
    }

    return (
        <div className="App " >
            <div className="d-flex justify-content-end ">
                <Toggle className="d-flex justify-content-end"
                    onClick={onToggle}
                    on={<div className="buttonTextF"> F °</div>}
                    off={<div className="buttonTextC">C °</div>}
                    size="lg"
                    offstyle="default"
                    onstyle="default"
                    active={toggleActive}
                />
            </div>
            <header className="App-header background" role="main" style={{
                background: `url("${process.env.PUBLIC_URL + backgroundUrl}") no-repeat center / cover `
            }}  >
                <Container>
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
                    <Weather icon={icon1[icon]} tempMin={convertTemp(tempMin)} tempMax={convertTemp(tempMax)} city={city}
                        description={description} currentTemp={convertTemp(currentTemp)}
                    />
                </Container>
            </header>

            <Forecast tempCity={tempCity} tempMins={min_divs} tempMaxes={max_divs} day={day} descriptions={descriptions} />
            <Footer />
        </div >

    );
}

export default App;


