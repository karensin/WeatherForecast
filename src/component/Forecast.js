import React from 'react'
import { Container } from 'react-bootstrap';
import ForecastCard from './ForecastCard';

export default function Forecast(props) {
    const { tempMins, tempMaxes, day, descriptions } = props
    return (
        <section className="forecast">
            <Container>
                <marquee behavior="slide" direction="right">
                    <div className="forecastTitle">5 Day Forecast</div>
                </marquee>
            </Container>
            <Container className="forecast">
                <div className="d-flex flex-row d-flex justify-content-around">
                    <ForecastCard tempMin={tempMins} tempMax={tempMaxes} day={day} description={descriptions} />
                </div>
            </Container >
        </section>
    )
}
