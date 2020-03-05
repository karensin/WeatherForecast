import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const scales = {
    KELVIN: 'kelvin', 
    CELSIUS: 'celsius', 
    FAHRENHEIT: 'fahrenheit'
}

const location ={
    city: undefined 
}
 
const Weather = props => {
    const {currentTemp,tempMin,tempMax,description} = props 
    //tempScale is the scale we want to convert to
    const [tempScale, setTempScale]= useState(scales.FAHRENHEIT) 
    // const [location, setLocation]= useState(location.city) 
 
    function onClickConvertScale(){

        if(tempScale===scales.FAHRENHEIT){
            setTempScale(scales.CELSIUS)
        }
        if(tempScale===scales.CELSIUS){
             setTempScale(scales.FAHRENHEIT)
        }

    }

    return (
        <div className="container">
        <div className=" d-flex justify-content-end">
        <Button  onClick={onClickConvertScale} > C </Button> 
        </div>
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
            <h4 className="py-3">  {description} </h4>
        </div>
    );
    
    function convertTemp(temp){
        let newTemp 
        let dec = ''
       if(tempScale===scales.CELSIUS){
            newTemp=calCelsius(temp)
            dec= 'C' 
       }
       if(tempScale===scales.FAHRENHEIT){
            newTemp= getFahrenheit(temp)
            dec= 'F'
        }
        if(tempScale===scales.KELVIN){  
            newTemp=temp
        }
         return (
            <div>
                {newTemp} {dec} &deg;
             </div>
        );
    }

    // function minmaxTemp(min, max) {
    //     let newMin
    //     let newMax
    //     //convert to celcius only when tempScale is celsius 
    //     if(tempScale===scales.CELSIUS){
    //         newMin=calCelsius(min)
    //         newMax=calCelsius(max)
    //     }
    //     if(tempScale===scales.FAHRENHEIT){
    //         newMin=getFahrenheit(min)
    //         newMax=getFahrenheit(max)
    //     }
    //     if(tempScale===scales.KELVIN){
    //         newMin=min
    //         newMax=max
    //     }

    //     return (
    //         <h3>
    //             <span className="px-4">{newMin}&deg;</span>
    //             <span className="px-4">{newMax}&deg;</span>
    //         </h3>
    //     );

    // }

}
export default Weather;

function calCelsius(newTemp) {
    let cell = Math.floor(newTemp - 273.15);
    return cell;
  }

function getFahrenheit(newTemp){
    const cell=calCelsius(newTemp)
    return Math.floor(cell * (9/5) + 32);    
}

