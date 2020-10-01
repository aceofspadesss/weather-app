import React from 'react';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Weather App</a>
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
                            <a className="dropdown-item" href="#">Clear Sky Demo</a>
                            <a className="dropdown-item" href="#">Few Clouds Demo</a>
                            <a className="dropdown-item" href="#">Clear Sky Demo</a>
                            <a className="dropdown-item" href="#">Scattered Clouds Demo</a>
                            <a className="dropdown-item" href="#">Broken Clouds Demo</a>
                            <a className="dropdown-item" href="#">Shower Rain Demo</a>
                            <a className="dropdown-item" href="#">Rain Demo</a>
                            <a className="dropdown-item" href="#">Thunderstorm Demo</a>
                            <a className="dropdown-item" href="#">Snow Demo</a>
                            <a className="dropdown-item" href="#">Mist Demo</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;