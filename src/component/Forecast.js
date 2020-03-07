import React from 'react'
import { useState, useEffect, useRef } from 'react';


let location = {
    city: 'San Francisco',

}
const API_Key = "3bd8c061d50496738722309b7ed91dda";
const days = []


export default function Forecast() {

    const [currentTemp, setCurrentTemp] = useState()
    const [city, setCity] = useState(location.city);
    const [tempCity, setTempCity] = useState(location.city);
    const [state, setState] = useState();
    const [tempMin, setTempMin] = useState(0);
    const [tempMax, setTempMax] = useState(0);
    const [description, getDescription] = useState()
    const [input, setInput] = useState(0)
    const [time, getTime] = useState()


    useEffect(() => {
        console.log('useEffect Forecast called')
        const getforecast = async (e) => {
            //5 day forecast is available at any location or city. It includes weather data every 3 hours.
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${tempCity}&appid=${API_Key}`);
            //
            const response = await api_call.json();
            console.log(response)

            if (response.cod !== "200") {
                return
            }

            setCity(tempCity)

            // setTempMin(response.main.temp_min)

            // setTempMax(response.main.temp_max)

            // getDescription(response.weather[0].main)

            // setCurrentTemp(response.main.temp)
            // console.log(response.list[0].dt)
            //item.main.temp_min
            const timeList = response.list.filter((item, index) =>
                index % 7 === 0
            )


            function splitDays(array, size) {
                let index = 0;
                while (index < array.length) {
                    days.push(array.slice(index, size + index));
                    index += size;
                }
            }

            splitDays(response.list, 8)
            console.log(days)
            const day1 = days[0]
            //location of the temp_min 
            // console.log(day1[0].main.temp_min)

            function findMin() {
                for (let i = 0; i < days.length; i++) {
                    console.log(days[i], 'first for loop')
                    let day = days[i]
                    for (let j = 0; j < day.length; j++) {
                        let minTemp = day[j].main.temp_min

                    }
                }


            }
            findMin()
        }

        getforecast();
    }, [tempCity]);

    return (
        <div>
            {tempCity} {time}
        </div>
    )
}
