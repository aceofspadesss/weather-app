import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactCardFlip from 'react-card-flip';

const Forecast = (props) => {
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const [weather, setWeather] = useState({});
    const [future, setFuture] = useState({ day1: '', day2: '', day3: '', day4: '' });
    const [icons, setIcons] = useState({ icon1: '', icon2: '', icon3: '', icon4: ''});
    const [temp, setTemp] = useState({ temp1: '', temp2: '', temp3: '', temp4: '' });
    const [desc, setDesc] = useState({ desc1: '', desc2: '', desc3: '', desc4: '' });
    const [wind, setWind] = useState({ wind1: '', wind2: '', wind3: '', wind4: '' });
    const [pressure, setPressure] = useState({ pressure1: '', pressure2: '', pressure3: '', pressure4: '' });
    const [humidity, setHumidity] = useState({ humidity1: '', humidity2: '', humidity3: '', humidity4: '' });
    const [cloudness, setCloudness] = useState({ cloudness1: '', cloudness2: '', cloudness3: '', cloudness4: '' })
    const [isFlipped1, setIsFlipped1] = useState(false);
    const [isFlipped2, setIsFlipped2] = useState(false);
    const [isFlipped3, setIsFlipped3] = useState(false);
    const [isFlipped4, setIsFlipped4] = useState(false);

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
        setWind({ wind1: result.data.daily[1].wind_speed,
                  wind2: result.data.daily[2].wind_speed,
                  wind3: result.data.daily[3].wind_speed,
                  wind4: result.data.daily[4].wind_speed
                });
        setPressure({ pressure1: result.data.daily[1].pressure,
                      pressure2: result.data.daily[2].pressure,
                      pressure3: result.data.daily[3].pressure,
                      pressure4: result.data.daily[4].pressure
                    });
        setHumidity({ humidity1: result.data.daily[1].humidity,
                      humidity2: result.data.daily[2].humidity,
                      humidity3: result.data.daily[3].humidity,
                      humidity4: result.data.daily[4].humidity4
                    });
        setCloudness({ cloudness1: result.data.daily[1].clouds,
                       cloudness2: result.data.daily[2].clouds,
                       cloudness3: result.data.daily[3].clouds,
                       cloudness4: result.data.daily[4].clouds
                    });
    }

    useEffect(() => {
        forecast();
    }, [props.coord])

    const handleClick1 = () => {
        setIsFlipped1(!isFlipped1);
    };

    const handleClick2 = () => {
        setIsFlipped2(!isFlipped2);
    };

    const handleClick3 = () => {
        setIsFlipped3(!isFlipped3);
    };

    const handleClick4 = () => {
        setIsFlipped4(!isFlipped4);
    };

    return(
        <div className="d-flex flex-wrap forecast">
            <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
                <div id="in1day" className="card d-flex align-items-center mt-3 mr-4 col" onClick={() => handleClick1()} style={{background: `linear-gradient(0deg, ${props.gradientBackground.color1}, ${props.gradientBackground.color2}, ${props.gradientBackground.color3}`}}>
                    <h4 className="day-1">{future.day1}</h4>
                    <h1 className="icon-1">
                        <img src={`https://openweathermap.org/img/wn/${icons.icon1}@2x.png`} alt="weather icon" />
                    </h1>
                    <h2 className="temp-1">{`${temp.temp1}°`}</h2>
                    <h4 className="desc-1">{desc.desc1}</h4>
                </div>

                <div id="in1day" className="card d-flex align-items-center mt-3 mr-4 col card-back" onClick={() => handleClick1()} style={{background: `linear-gradient(0deg, ${props.gradientBackground.color1}, ${props.gradientBackground.color2}, ${props.gradientBackground.color3}`}}>
                    <h4 className="info card-back-text">{`Wind: ${wind.wind1} m/s`}</h4>
                    <h4 className="info card-back-text">{`Pressure: ${pressure.pressure1} hPa`}</h4>
                    <h4 className="info card-back-text">{`Humidity: ${humidity.humidity1}%`}</h4>
                    <h4 className="info card-back-text">{`Cloudness: ${cloudness.cloudness1}%`}</h4>
                </div>
            </ReactCardFlip>
            <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
                <div id="in2days" className="card d-flex align-items-center mt-3 mr-4 col" onClick={() => handleClick2()} style={{background: `linear-gradient(0deg, ${props.gradientBackground.color1}, ${props.gradientBackground.color2}, ${props.gradientBackground.color3}`}}>
                    <h4 className="day-2">{future.day2}</h4>
                    <h1 className="icon-2">
                        <img src={`https://openweathermap.org/img/wn/${icons.icon2}@2x.png`} alt="weather icon" />
                    </h1>
                    <h2 className="temp-2">{`${temp.temp2}°`}</h2>
                    <h4 className="desc-2">{desc.desc2}</h4>
                </div>

                <div id="in2days" className="card d-flex align-items-center mt-3 mr-4 col card-back" onClick={() => handleClick2()} style={{background: `linear-gradient(0deg, ${props.gradientBackground.color1}, ${props.gradientBackground.color2}, ${props.gradientBackground.color3}`}}>
                    <h4 className="info card-back-text">{`Wind: ${wind.wind2} m/s`}</h4>
                    <h4 className="info card-back-text">{`Pressure: ${pressure.pressure2} hPa`}</h4>
                    <h4 className="info card-back-text">{`Humidity: ${humidity.humidity2}%`}</h4>
                    <h4 className="info card-back-text">{`Cloudness: ${cloudness.cloudness2}%`}</h4>
                </div>
            </ReactCardFlip>
            <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">
                <div id="in3days" className="card d-flex align-items-center mt-3 mr-4 col" onClick={() => handleClick3()} style={{background: `linear-gradient(0deg, ${props.gradientBackground.color1}, ${props.gradientBackground.color2}, ${props.gradientBackground.color3}`}}>
                    <h4 className="day-3">{future.day3}</h4>
                    <h1 className="icon-3">
                        <img src={`https://openweathermap.org/img/wn/${icons.icon3}@2x.png`} alt="weather icon" />
                    </h1>
                    <h2 className="temp-3">{`${temp.temp3}°`}</h2>
                    <h4 className="desc-3">{desc.desc3}</h4>
                </div>

                <div id="in3days" className="card d-flex align-items-center mt-3 mr-4 col card-back" onClick={() => handleClick3()} style={{background: `linear-gradient(0deg, ${props.gradientBackground.color1}, ${props.gradientBackground.color2}, ${props.gradientBackground.color3}`}}>
                    <h4 className="info card-back-text">{`Wind: ${wind.wind3} m/s`}</h4>
                    <h4 className="info card-back-text">{`Pressure: ${pressure.pressure3} hPa`}</h4>
                    <h4 className="info card-back-text">{`Humidity: ${humidity.humidity3}%`}</h4>
                    <h4 className="info card-back-text">{`Cloudness: ${cloudness.cloudness3}%`}</h4>
                </div>
            </ReactCardFlip>
            <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">
                <div id="in4days" className="card d-flex align-items-center mt-3 col" onClick={() => handleClick4()} style={{background: `linear-gradient(0deg, ${props.gradientBackground.color1}, ${props.gradientBackground.color2}, ${props.gradientBackground.color3}`}}>
                    <h4 className="day-4">{future.day4}</h4>
                    <h1 className="icon-4">
                        <img src={`https://openweathermap.org/img/wn/${icons.icon4}@2x.png`} alt="weather icon" />
                    </h1>
                    <h2 className="temp-4">{`${temp.temp4}°`}</h2>
                    <h4 className="desc-4">{desc.desc4}</h4>
                </div>

                <div id="in4days" className="card d-flex align-items-center mt-3 col card-back" onClick={() => handleClick4()} style={{background: `linear-gradient(0deg, ${props.gradientBackground.color1}, ${props.gradientBackground.color2}, ${props.gradientBackground.color3}`}}>
                    <h4 className="info card-back-text">{`Wind: ${wind.wind1} m/s`}</h4>
                    <h4 className="info card-back-text">{`Pressure: ${pressure.pressure3} hPa`}</h4>
                    <h4 className="info card-back-text">{`Humidity: ${humidity.humidity3}%`}</h4>
                    <h4 className="info card-back-text">{`Cloudness: ${cloudness.cloudness3}%`}</h4>
                </div>
            </ReactCardFlip>
            
            
            
        </div>
    )
}

export default Forecast;