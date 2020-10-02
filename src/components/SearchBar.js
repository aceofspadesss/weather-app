import React, { useState } from 'react';

const SearchBar = (props) => {

    const [city, setCity] = useState('');

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