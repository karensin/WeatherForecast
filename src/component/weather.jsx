import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const scales = {
    KELVIN: 'kelvin',
    CELSIUS: 'celsius',
    FAHRENHEIT: 'fahrenheit'
}

const location = {
    city: undefined
}


const Weather = props => {


    function convertTemp(temp) {
        let dec = ''
        let newTemp

        if (tempScale === scales.CELSIUS) {
            newTemp = calCelsius(temp)
            dec = 'C'
        }
        if (tempScale === scales.FAHRENHEIT) {
            newTemp = getFahrenheit(temp)
            dec = 'F'
        }
        if (tempScale === scales.KELVIN) {
            newTemp = temp
        }
        return (
            <div>
                {newTemp} {dec} &deg;

             </div>
        );
    }
    const { currentTemp, tempMin, tempMax, description } = props
    //tempScale is the scale we want to convert to
    const [tempScale, setTempScale] = useState(scales.FAHRENHEIT)
    // const [location, setLocation]= useState(location.city) 

    function onClickConvertScale() {

        if (tempScale === scales.FAHRENHEIT) {
            setTempScale(scales.CELSIUS)
        }
        if (tempScale === scales.CELSIUS) {
            setTempScale(scales.FAHRENHEIT)
        }

    }

    return (

        < div className="container body">
            <div className="cards"></div>
            <h1> {props.city} </h1>
            <h2 className="py-4">
                <i className="wi wi-day-sunny" />
            </h2>
            <h1 className="py-2"> {convertTemp(currentTemp)} </h1>

            {/** show max n min temp*/}
            <div>
                <h1 className="px-4 d-flex justify-content-around">
                    {convertTemp(tempMin)}
                    {convertTemp(tempMax)}
                </h1>
            </div>

            {/* Weather description */}
            <h4 className="py-3 ">
                {description}
            </h4>
            <div className="d-flex justify-content-end">
                <Button className="" onClick={onClickConvertScale} > C </Button>
            </div>
        </div>

    );



}
export default Weather;

function calCelsius(newTemp) {
    let cell = Math.floor(newTemp - 273.15);
    return cell;
}

function getFahrenheit(newTemp) {
    const cell = calCelsius(newTemp)
    return Math.floor(cell * (9 / 5) + 32);
}

