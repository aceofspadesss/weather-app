import React from 'react';

const WeatherToday = (props) => {
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date();
    let dayCounter = date.getDay();
    let today = week[dayCounter];
    let currHour = date.getHours();
    let currMin = date.getMinutes();

    return(
        <div className="row">
            <div className="col">
                <div id="today" className="card d-flex align-items-center mt-3" style={{background: `linear-gradient(0deg, ${props.gradientBackground.color1}, ${props.gradientBackground.color2}, ${props.gradientBackground.color3}`}}>
                    <h3 id="name">{props.data.name}</h3>
                    <h2 id="temp-now">{`${Math.round(props.temp.temp)}°`}</h2>
                    <h2 id="status-now">
                        <img src={`https://openweathermap.org/img/wn/${props.icon.icon}@2x.png`} alt="weather icon" />
                    </h2>
                    <h4 id="desc-now">{props.icon.description}</h4>
                    <p id="date">{`${today} ${currHour}:${currMin}`}</p>
                    <div className="row">
                        <p className="col" id="wind">
                            {`Wind ${props.wind.speed} m/s`}
                        </p>
                        <p className="col-m" id="pres">
                            {`Pressure ${props.main.pressure} hPa`}
                        </p>
                    </div>
                    <div className="row">
                        <p className="col" id="hum">
                            {`Humidity ${props.main.humidity}%`}
                        </p>
                        <p className="col-s" id="cloud">
                            {`Cloudness ${props.clouds.all}%`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherToday;