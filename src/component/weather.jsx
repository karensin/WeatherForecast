import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Forecast from "./Forecast";

const scales = {
    KELVIN: 'kelvin',
    CELSIUS: 'celsius',
    FAHRENHEIT: 'fahrenheit'
}

const location = {
    city: undefined
}

const Weather = props => {
    const { currentTemp, tempMin, tempMax, description } = props

    // function onClickConvertScale() {

    //     if (tempScale === scales.FAHRENHEIT) {
    //         setTempScale(scales.CELSIUS)
    //     }
    //     if (tempScale === scales.CELSIUS) {
    //         setTempScale(scales.FAHRENHEIT)
    //     }

    // }

    return (
        < div className="container body">
            <div className="cards"></div>
            <div className="cityHeader"> {props.city} </div>
            <h2 className="py-4">
                <div className="icons"><i className={`wi ${props.icon}`} /></div>
            </h2>
            <h2 className="py-2"> Current {currentTemp} </h2>

            {/** show max n min temp*/}
            <div>
                <h2 className=" d-flex justify-content-around">
                    <div> min{tempMin}</div>
                    <div>max{tempMax}</div>
                </h2>
            </div>

            {/* Weather description */}
            <h3 className="py-3 ">
                {description}
            </h3>
            <div className="d-flex justify-content-end">
                {/* <Button className="clear" variant="light" onClick={onClickConvertScale} > C / F </Button> */}

            </div>
        </div >

    );

}
export default Weather;

