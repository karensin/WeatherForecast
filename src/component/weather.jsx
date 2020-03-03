import React from "react";


const Weather = props => {


    return (
        <div className="container">
            <div className="cards"></div>
            <h1> {props.city} </h1>
            <h5 className="py-4">
                <i className="wi wi-day-sunny" />
            </h5>

            <h1 className="py-2">  35 &deg; F </h1>
            {/* Get Celsius */}


            {/** show max n min temp*/}
            {minmaxTemp(props.tempMin, props.tempMax)}

            {/* Weather description */}
            <h4 className="py-3">  sunny </h4>
        </div>
    );
}
export default Weather;


function minmaxTemp(min, max) {

    return (
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    );

}
