import React from "react";

const Weather = props => {
    const { currentTemp, tempMin, tempMax, description, city } = props

    return (
        <div className="container body" style={{
            textShadow: '2px 2px rgba(150, 150, 150)'
        }}>
            <div className="cards"></div>
            <div className="cityHeader"> {city} </div>
            <h2 className="py-4">
                <div className="icons"><i className={`wi ${props.icon}`} /></div>
            </h2>
            <h2 className="py-2"> Current {currentTemp} </h2>
            <div>
                <h2 className=" d-flex justify-content-around">
                    <div> min{tempMin}</div>
                    <div>max{tempMax}</div>
                </h2>
            </div>

            {/* Weather description */}
            <h3 className="py-3">
                {description}
            </h3>
            <div className="d-flex justify-content-end">
            </div>
        </div >

    );

}
export default Weather;

