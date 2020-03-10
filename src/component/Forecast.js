import React from 'react'
import { useState, useEffect, useRef } from 'react';



const API_Key = "3bd8c061d50496738722309b7ed91dda";
const days = []

export default function Forecast(props) {

    const [currentTemp, setCurrentTemp] = useState()
    const [tempMin, setTempMin] = useState([]);
    const [tempMax, setTempMax] = useState([]);
    const [description, getDescription] = useState()
    const [input, setInput] = useState(0)
    const [time, getTime] = useState()


    useEffect(() => {
        console.log('useEffect Forecast called')
        const getforecast = async (e) => {
            //5 day forecast is available at any location or city. It includes weather data every 3 hours.
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${props.tempCity}&appid=${API_Key}`);
            //
            const response = await api_call.json();
            console.log(response)

            if (response.cod !== "200") {
                return
            }

            // setTempMin(response.main.temp_min)

            // setTempMax(response.main.temp_max)

            // getDescription(response.weather[0].main)

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
            console.log(days, 'days')
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


            const result = findMin(days).map(item => <div>{item.min}</div>)
            console.log(result, 'result')

            setTempMin([...result])
            // tempMin = [...result]

        }
        getforecast();
    }, [props.tempCity]);

    return (
        <div>
            <h2> {tempMin} </h2>
            <h3>
                {props.tempCity}
            </h3>
        </div>
    )
}
