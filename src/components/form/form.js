import React from 'react';
import './form.css';

const Form = (props) => {
    return (
        <form onSubmit={props.weatherMethod} className="form">
            <input type="text" name="city" placeholder="City"/>
            <button>Get Weather</button>
        </form>
    )
}

export default Form;