
export import React from 'react'


const scales = {
    KELVIN: 'kelvin',
    CELSIUS: 'celsius',
    FAHRENHEIT: 'fahrenheit'
}


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
function onClickConvertScale() {

    if (tempScale === scales.FAHRENHEIT) {
        setTempScale(scales.CELSIUS)
    }
    if (tempScale === scales.CELSIUS) {
        setTempScale(scales.FAHRENHEIT)
    }

}
function calCelsius(newTemp) {
    let cell = Math.floor(newTemp - 273.15);
    return cell;
}

function getFahrenheit(newTemp) {
    const cell = calCelsius(newTemp)
    return Math.floor(cell * (9 / 5) + 32);
}


