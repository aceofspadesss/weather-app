import axios from 'axios';

const cityName = 'Chernivtsi';
const KEY = '788052049dadb25118cb545dc5596683';

export default axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params: {
        q: cityName,
        appid: KEY
    }
});