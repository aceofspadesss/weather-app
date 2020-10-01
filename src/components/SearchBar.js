import React, { useState } from 'react';
import App from './App';

const SearchBar = (props) => {

    const [city, setCity] = useState('');
    
    function callCity() {
        props.setCityName(city);
    }

    return(
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for a city..." id="cityName" onChange={event => setCity(event.target.value)} />
            <div className="input-group-prepend"></div>
            <button className="btn bg-dark text-white" onClick={() => {props.setCityName(city); props.setTrigger(trigger => trigger + 1)}}>
                <ion-icon name="search-outline"></ion-icon>
            </button>
        </div>
    )
}

export default SearchBar;