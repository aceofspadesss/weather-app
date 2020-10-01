import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/App.css';
import SearchBar from './SearchBar';
import WeatherToday from './WeatherToday';
import Forecast from './Forecast';
import Navbar from './Navbar';


const App = (props) => {
    const [data, setData] = useState({});
    const [temp, setTemp] = useState({});
    const [icon, setIcon] = useState([]);
    const [wind, setWind] = useState({});
    const [main, setMain] = useState({});
    const [coord, setCoord] = useState({});
    const [clouds, setClouds] = useState({});
    const [cityName, setCityName] = useState('');
    const [trigger, setTrigger] = useState(0);
    const [weatherBackground, setBackground] = useState('');

    const dataRequest = async (name) => {
        const result = await axios(
            `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=788052049dadb25118cb545dc5596683&units=metric`,
        );

        setData(result.data);
        setTemp(result.data.main);
        setIcon(result.data.weather[0]);
        setWind(result.data.wind);
        setMain(result.data.main);
        setClouds(result.data.clouds);
        setCoord(result.data.coord);
        console.log(data);
        console.log(temp);
        console.log(icon);
        console.log(main);
        console.log(coord);
    };

    useEffect(() => {
        dataRequest(cityName);
        console.log(cityName);
    }, [trigger])

    useEffect(() => {
        dataRequest('Chernivtsi');
    }, [])

    useEffect(() => {
        if (icon.icon === '01d' || icon.icon === '01n') {
            setBackground('../images/clear-sky.jpg');
        } else if (icon.icon === '02d' || icon.icon === '02n') {
            setBackground('../images/few-clouds.jpg');
        } else if (icon.icon === '03d' || icon.icon === '03n') {
            setBackground('../images/scattered-clouds.jpg');
        } else if (icon.icon === '04d' || icon.icon === '04n') {
            setBackground('../images/broken-clouds.jpg');
        } else if (icon.icon === '09d' || icon.icon === '09n') {
            setBackground('../images/shower-rain.jpg');
        } else if (icon.icon === '10d' || icon.icon === '10n') {
            setBackground('../images/rain.jpg');
        } else if (icon.icon === '11d' || icon.icon === '11n') {
            setBackground('../images/thunderstorm.jpg');
        } else if (icon.icon === '13d' || icon.icon === '13n') {
            setBackground('../images/snow.jpg');
        } else if (icon.icon === '50d' || icon.icon === '50n') {
            setBackground('../images/mist.jpg');
        }
    }, [icon.description]);


    return(
        <div className="content-wrapper h-100" style={{background: `url(${weatherBackground}) no-repeat center center fixed`}}>
            <Navbar />
            <div className="container app-container">
                <SearchBar setCityName={setCityName} trigger={trigger} setTrigger={setTrigger} />
                <WeatherToday data={data} temp={temp} icon={icon} wind={wind} main={main} clouds={clouds} />
                <Forecast lon={coord.lon} lat={coord.lat} coord={coord} />
            </div>
        </div>
    )
}

export default App;