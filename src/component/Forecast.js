import React from 'react'
import { useState, useEffect, useRef } from 'react';
// import { calCelsius, getFahrenheit } from "./weather";
import { Container } from 'react-bootstrap';
import ForecastCard from './ForecastCard';

export default function Forecast(props) {
    const { tempMins, tempMaxes, day, descriptions } = props

    useEffect(() => {
        console.log('useEffect Forecast called')
        console.log('props', props)

    }, [props.tempCity]);

    return (
        <body className="forecast">
            <Container className="forecast">
                <div class="d-flex flex-row d-flex justify-content-around">
                    {/* {[day, descriptions]} */}
                    <ForecastCard tempMin={tempMins} tempMax={tempMaxes} day={day ? day : []} description={descriptions} />
                </div>
            </Container >
        </body>
    )
}


