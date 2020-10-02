import React from 'react';

const Navbar = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="http://aceofspadesss.github.io/weather-app">
                <img src="https://www.feirox.com/rivu/2016/04/Klara-1.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" style={{marginLeft: '5px', marginRight: '5px'}} />
                Weather App
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Debug Menu
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <button className="dropdown-item" onClick={() => {
                                                                props.setBackground('http://aceofspadesss.github.io/weather-app/images/clear-sky.jpg'); 
                                                                props.setGradient({ color1: 'rgba(86,77,241,0.9)', color2: 'rgba(80,80,246,0.8)', color3: 'rgba(219,249,255,0.7)' 
                                                                })} }>Clear Sky Demo</button>
                            <button className="dropdown-item" onClick={() => {
                                                                props.setBackground('http://aceofspadesss.github.io/weather-app/images/few-clouds.jpg');
                                                                props.setGradient({ color1: 'rgba(53,98,166,0.9)', color2: 'rgba(68,157,241,0.8)', color3: 'rgba(172,223,233,0.7)' });
                                                                }}>Few Clouds Demo</button>
                            <button className="dropdown-item" onClick={() => {
                                                                props.setBackground('http://aceofspadesss.github.io/weather-app/images/scattered-clouds.jpg');
                                                                props.setGradient({ color1: 'rgba(136,136,136,0.9)', color2: 'rgba(113,145,175,0.8)', color3: 'rgba(230,230,230,0.7)' });
                                                                }}>Scattered Clouds Demo</button>
                            <button className="dropdown-item" onClick={() => {
                                                                props.setBackground('http://aceofspadesss.github.io/weather-app/images/broken-clouds.jpg');
                                                                props.setGradient({ color1: 'rgba(204,204,204,0.9)', color2: 'rgba(90,134,176,0.8)', color3: 'rgba(29,56,73,0.7)' });
                                                                }}>Broken Clouds Demo</button>
                            <button className="dropdown-item" onClick={() => {
                                                                props.setBackground('http://aceofspadesss.github.io/weather-app/images/shower-rain.jpg');
                                                                props.setGradient({ color1: 'rgba(149,177,255,0.9)', color2: 'rgba(40,70,98,0.8)', color3: 'rgba(0,0,0,0.7)' });
                                                                }}>Shower Rain Demo</button>
                            <button className="dropdown-item" onClick={() => {
                                                                props.setBackground('http://aceofspadesss.github.io/weather-app/images/rain.jpg');
                                                                props.setGradient({ color1: 'rgba(41,93,21,0.9)', color2: 'rgba(110,150,119,0.8)', color3: 'rgba(231,255,180,0.7)' });
                                                                }}>Rain Demo</button>
                            <button className="dropdown-item" onClick={() => {
                                                                props.setBackground('http://aceofspadesss.github.io/weather-app/images/thunderstorm.jpg');
                                                                props.setGradient({ color1: 'rgba(0,5,45,0.9)', color2: 'rgba(23,21,77,0.8)', color3: 'rgba(145,143,213,0.7)' });
                                                                }}>Thunderstorm Demo</button>
                            <button className="dropdown-item" onClick={() => {
                                                                props.setBackground('http://aceofspadesss.github.io/weather-app/images/snow.jpg');
                                                                props.setGradient({ color1: 'rgba(162,170,195,0.9)', color2: 'rgba(233,233,233,0.8)', color3: 'rgba(238,238,238,0.7)' });
                                                                }}>Snow Demo</button>
                            <button className="dropdown-item" onClick={() => {
                                                                props.setBackground('http://aceofspadesss.github.io/weather-app/images/mist.jpg');
                                                                props.setGradient({ color1: 'rgba(228,234,240,0.9)', color2: 'rgba(255,255,255,0.8)', color3: 'rgba(164,164,164,0.7)' });
                                                                }}>Mist Demo</button>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;