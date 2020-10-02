import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/App.css';
import '../css/MediaQueries.css';
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
    const [gradientBackground, setGradient] = useState({ color1: '', color2: '', color3: '' });

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
            setGradient({ color1: 'rgba(86,77,241,0.9)', color2: 'rgba(80,80,246,0.8)', color3: 'rgba(219,249,255,0.7)' });
        } else if (icon.icon === '02d' || icon.icon === '02n') {
            setBackground('../images/few-clouds.jpg');
            setGradient({ color1: 'rgba(53,98,166,0.9)', color2: 'rgba(68,157,241,0.8)', color3: 'rgba(172,223,233,0.7)' });
        } else if (icon.icon === '03d' || icon.icon === '03n') {
            setBackground('../images/scattered-clouds.jpg');
            setGradient({ color1: 'rgba(136,136,136,0.9)', color2: 'rgba(113,145,175,0.8)', color3: 'rgba(230,230,230,0.7)' });
        } else if (icon.icon === '04d' || icon.icon === '04n') {
            setBackground('../images/broken-clouds.jpg');
            setGradient({ color1: 'rgba(204,204,204,0.9)', color2: 'rgba(90,134,176,0.8)', color3: 'rgba(29,56,73,0.7)' });
        } else if (icon.icon === '09d' || icon.icon === '09n') {
            setBackground('../images/shower-rain.jpg');
            setGradient({ color1: 'rgba(149,177,255,0.9)', color2: 'rgba(40,70,98,0.8)', color3: 'rgba(0,0,0,0.7)' });
        } else if (icon.icon === '10d' || icon.icon === '10n') {
            setBackground('../images/rain.jpg');
            setGradient({ color1: 'rgba(41,93,21,0.9)', color2: 'rgba(110,150,119,0.8)', color3: 'rgba(231,255,180,0.7)' });
        } else if (icon.icon === '11d' || icon.icon === '11n') {
            setBackground('../images/thunderstorm.jpg');
            setGradient({ color1: 'rgba(0,5,45,0.9)' , color2: 'rgba(23,21,77,0.8)', color3: 'rgba(145,143,213,0.7)' });
        } else if (icon.icon === '13d' || icon.icon === '13n') {
            setBackground('../images/snow.jpg');
            setGradient({ color1: 'rgba(162,170,195,0.9)', color2: 'rgba(233,233,233,0.8)', color3: 'rgba(238,238,238,0.7)' });
        } else if (icon.icon === '50d' || icon.icon === '50n') {
            setBackground('../images/mist.jpg');
            setGradient({ color1: 'rgba(58,76,91,0.9)', color2: 'rgba(222,222,222,0.8)', color3: 'rgba(150,150,150,0.7)' });
        }
    }, [icon.description]);


    return(
        <div className="content-wrapper h-100" style={{background: `url(${weatherBackground}) repeat center center fixed`}}>
            <Navbar setBackground={setBackground} setGradient={setGradient} />
            <div className="container app-container">
                <SearchBar setCityName={setCityName} trigger={trigger} setTrigger={setTrigger} />
                <WeatherToday data={data} temp={temp} icon={icon} wind={wind} main={main} clouds={clouds} gradientBackground={gradientBackground} />
                <Forecast lon={coord.lon} lat={coord.lat} coord={coord} gradientBackground={gradientBackground} />
            </div>
        </div>
    )
}

export default App;