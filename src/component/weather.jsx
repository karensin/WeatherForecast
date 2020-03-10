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
            <div className="cityHeader"> {props.city} </div>
            <h2 className="py-4">
                <i className={`wi ${props.icon}`} />
            </h2>
            <h2 className="py-2"> Current {convertTemp(currentTemp)} </h2>

            {/** show max n min temp*/}
            <div>
                <h2 className=" d-flex justify-content-around">
                    <div> min{convertTemp(tempMin)}</div>
                    <div>max{convertTemp(tempMax)}</div>
                </h2>
            </div>

            {/* Weather description */}
            <h3 className="py-3 ">
                {description}
            </h3>
            <div className="d-flex justify-content-end">
                <Button className="clear" variant="light" onClick={onClickConvertScale} > C / F </Button>

            </div>
        </div >

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

