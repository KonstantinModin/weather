import React from 'react';
import './weather.css';

const Weather = (props) => {
    const { temp, city, country, sunrise, sunset, press, humidity, error } = props;
    console.log(temp);
    if (temp) {
        return (
        <div className="weather">         
            <h3><p>Position: {city}, {country}</p>
            <p>Temperature: {temp} °C</p>
            <p>Pressure: {press} mbar</p>
            <p>Humidity: {humidity} %</p>
            <p>Sunrise: {sunrise}</p>
            <p>Sunset: {sunset}</p> </h3>           
        </div> 
    )}else {
        return (<div><h3>{error}</h3></div>)
    }
}

export default Weather;