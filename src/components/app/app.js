import React, {Component} from 'react';
import Info from '../info';
import Weather from '../weather';
import Form from '../form';
import '../../bootstrap.min.css';
import './app.css';

const _api_key = '8c3ca87d2ba57ed0c3a934817e32ebce';
const _url_begin = 'https://api.openweathermap.org/data/2.5/weather?q='

export default class App extends Component {
    state ={
        temp: null,
        city: null,
        country: null,
        sunrise: null,
        sunset: null,
        press: null,
        humidity: null,
        error: null
    }

    gettinWeather = async (e) => {        
        e.preventDefault();
        const city = e.target.elements.city.value;
        if (city) {
            const api_url = await fetch(`${_url_begin+city}&appid=${_api_key}&units=metric`);
            if (api_url.status === 404) 
            this.setState({temp: null,
                city: null,
                country: null,
                sunrise: null,
                sunset: null,
                press: null,
                humidity: null,
                error: "Enter correct city"})
            else {
            const data = await api_url.json();                                     
            console.log(data);
            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                sunrise: new Date(data.sys.sunrise*1000).toLocaleString().split(', ')[1],
                sunset: new Date(data.sys.sunset*1000).toLocaleString().split(', ')[1],
                press: data.main.pressure,
                humidity: data.main.humidity,
                error: null
            });}
        } else {
            this.setState({temp: null,
                city: null,
                country: null,
                sunrise: null,
                sunset: null,
                press: null,
                humidity: null,
                error: "Enter city"});
        }
    }

    render(){
        return (
            <div className="app"> 
                <div className="main">
                    <Info />
                    <Form weatherMethod={this.gettinWeather}/>
                    <Weather {...this.state}/>                 
                </div>             
            </div>
        )
    }
}
