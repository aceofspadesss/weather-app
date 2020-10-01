import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherToday from './WeatherToday';

const Forecast = (props) => {
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const [weather, setWeather] = useState({});
    const [future, setFuture] = useState({ day1: '', day2: '', day3: '', day4: '' });
    const [icons, setIcons] = useState({ icon1: '', icon2: '', icon3: '', icon4: ''});
    const [temp, setTemp] = useState({ temp1: '', temp2: '', temp3: '', temp4: '' });
    const [desc, setDesc] = useState({ desc1: '', desc2: '', desc3: '', desc4: '' });

    const forecast = async () => {
        const result = await axios(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=788052049dadb25118cb545dc5596683&units=metric`
        );
        setWeather(result.data.daily);
        console.log(weather);

        let future = result.data.daily[1].dt
        let tomorrowID = new Date(future * 1000).getDay();
        setFuture({ day1: week[tomorrowID],
                    day2: week[(tomorrowID + 1)], 
                    day3: week[(tomorrowID + 2)], 
                    day4: week[(tomorrowID + 3)] 
                });
        setIcons({ icon1: result.data.daily[1].weather[0].icon, 
                   icon2: result.data.daily[2].weather[0].icon, 
                   icon3: result.data.daily[3].weather[0].icon, 
                   icon4: result.data.daily[4].weather[0].icon 
                });
        setTemp({ temp1: Math.round(result.data.daily[1].temp.day),
                  temp2: Math.round(result.data.daily[2].temp.day),
                  temp3: Math.round(result.data.daily[3].temp.day),
                  temp4: Math.round(result.data.daily[4].temp.day)
                });
        setDesc({ desc1: result.data.daily[1].weather[0].description,
                  desc2: result.data.daily[2].weather[0].description,
                  desc3: result.data.daily[3].weather[0].description,
                  desc4: result.data.daily[4].weather[0].description
                });
    }

    useEffect(() => {
        forecast();
    }, [props.coord])


    return(
        <div className="d-flex flex-wrap forecast">
            <div id="in1day" className="card d-flex align-items-center mt-3 mr-4 col">
                <h4 className="day-1">{future.day1}</h4>
                <h1 className="icon-1">
                    <img src={`https://openweathermap.org/img/wn/${icons.icon1}@2x.png`} />
                </h1>
                <h2 className="temp-1">{`${temp.temp1}°`}</h2>
                <h4 className="desc-1">{desc.desc1}</h4>
            </div>
            <div id="in2days" className="card d-flex align-items-center mt-3 mr-4 col">
                <h4 className="day-2">{future.day2}</h4>
                <h1 className="icon-2">
                    <img src={`https://openweathermap.org/img/wn/${icons.icon2}@2x.png`} />
                </h1>
                <h2 className="temp-2">{`${temp.temp2}°`}</h2>
                <h4 className="desc-2">{desc.desc2}</h4>
            </div>
            <div id="in3days" className="card d-flex align-items-center mt-3 mr-4 col">
                <h4 className="day-3">{future.day3}</h4>
                <h1 className="icon-3">
                    <img src={`https://openweathermap.org/img/wn/${icons.icon3}@2x.png`} />
                </h1>
                <h2 className="temp-3">{`${temp.temp3}°`}</h2>
                <h4 className="desc-3">{desc.desc3}</h4>
            </div>
            <div id="in4days" className="card d-flex align-items-center mt-3 col">
                <h4 className="day-4">{future.day4}</h4>
                <h1 className="icon-4">
                    <img src={`https://openweathermap.org/img/wn/${icons.icon4}@2x.png`} />
                </h1>
                <h2 className="temp-4">{`${temp.temp4}°`}</h2>
                <h4 className="desc-4">{desc.desc4}</h4>
            </div>
        </div>
    )
}

export default Forecast;