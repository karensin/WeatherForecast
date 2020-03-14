import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { calCelsius, getFahrenheit } from "./weather";
import { Container } from 'react-bootstrap';
import ForecastCard from './ForecastCard';
import { icon1 } from '../App'


const API_Key = "3bd8c061d50496738722309b7ed91dda";
const days = []
const daysString = {
    1: 'Mon',
    2: 'Tues',
    3: 'Wed',
    4: 'Thurs',
    5: 'Fri',
    6: 'Sat',
    7: 'Sun',

}


export default function Forecast(props) {

    const [currentTemp, setCurrentTemp] = useState()
    const [tempMin, setTempMin] = useState([]);
    const [tempMax, setTempMax] = useState([]);
    const [description, getDescription] = useState([])
    const [input, setInput] = useState(0)
    const [time, getTime] = useState()
    const [day, getDay] = useState([])



    useEffect(() => {
        console.log('useEffect Forecast called')
        const getforecast = async (e) => {
            //5 day forecast is available at any location or city. It includes weather data every 3 hours.
            const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${props.tempCity}&appid=${API_Key}`);
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
                    fiveDay.push(daysString[i])
                }
                return fiveDay
            }

            const forecast = getdate()

            getDay([...forecast])


            // setCurrentTemp(response.main.temp)
            // console.log(response.list[0].dt)
            //item.main.temp_min

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

            //location of the temp_min 
            // console.log(day1[0].main.temp_min)
            // let max = Math.max(...hours)
            // max: max

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




            const min = findMin(days).map(item =>
                <div>{getFahrenheit(item.min)}</div>
            )

            const max = findMax(days).map(item =>
                <div> {getFahrenheit(item.max)} </div>)

            setTempMin([...min])
            setTempMax([...max])
            getDescription([...desList])
            // tempMin = [...result]
        }
        getforecast();
    }, [props.tempCity]);

    return (
        <body className="forecast">
            <Container className="forecast">
                <div class="d-flex flex-row d-flex justify-content-around">
                    <ForecastCard tempMin={tempMin} tempMax={tempMax} day={day} description={description} />
                </div>
            </Container >
        </body>




    )
}


