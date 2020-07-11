let cityName = 'Kyiv';
let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let date = new Date();
let dayCounter = date.getDay();
let today = week[dayCounter];
let currHour = date.getHours();
let currMin = date.getMinutes();


function myData(){
 return fetch('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=788052049dadb25118cb545dc5596683&units=metric')
    .then((response) => { 
        return response.json().then((data) => {
            jsonData = data;
            lon = jsonData.coord.lon;
            lat = jsonData.coord.lat;
            $('#name').text(jsonData.name)
            $('#temp-now').text(Math.round(jsonData.main.temp) + '°')
            $('#desc-now').text(jsonData.weather[0].description).css('textTransform', 'capitalize')
            $('#date').text(today + ' ' + currHour + ':' + currMin)
            $('#wind').text("Wind " + jsonData.wind.speed + ' m/s');
            $('#pres').text("Pressure " + jsonData.main.pressure + ' hPa')
            $('#hum').text("Humidity " + jsonData.main.humidity + '%')
            $('#cloud').text("Cloudness " + jsonData.clouds.all + '%')
            $('#status-now').html(`<img src="http://openweathermap.org/img/wn/${jsonData.weather[0].icon}@2x.png">`);
        }).then((data) => {
            return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=788052049dadb25118cb545dc5596683&units=metric`)
                .then((response) => {
                    return response.json().then((data) => {
                        forecast = data;
                        let future = forecast.daily[1].dt
                        let tomorrowID = new Date(future * 1000).getDay();
                        let tomorrowDay = week[tomorrowID];
                        let tomorrowDay2 = week[tomorrowID + 1];
                        let tomorrowDay3 = week[tomorrowID + 2];
                        let tomorrowDay4 = week[tomorrowID + 3];


                        $('.day-1').text(tomorrowDay);
                        $('.icon-1').html(`<img src="http://openweathermap.org/img/wn/${forecast.daily[1].weather[0].icon}@2x.png">`);
                        $('.temp-1').text(Math.round(forecast.daily[1].temp.day) + '°');
                        $('.desc-1').text(forecast.daily[1].weather[0].description).css('textTransform', 'capitalize');

                        $('.day-2').text(tomorrowDay2);
                        $('.icon-2').html(`<img src="http://openweathermap.org/img/wn/${forecast.daily[2].weather[0].icon}@2x.png">`);
                        $('.temp-2').text(Math.round(forecast.daily[2].temp.day) + '°');
                        $('.desc-2').text(forecast.daily[2].weather[0].description).css('textTransform', 'capitalize');

                        $('.day-3').text(tomorrowDay3);
                        $('.icon-3').html(`<img src="http://openweathermap.org/img/wn/${forecast.daily[3].weather[0].icon}@2x.png">`);
                        $('.temp-3').text(Math.round(forecast.daily[3].temp.day) + '°');
                        $('.desc-3').text(forecast.daily[3].weather[0].description).css('textTransform', 'capitalize');

                        $('.day-4').text(tomorrowDay4);
                        $('.icon-4').html(`<img src="http://openweathermap.org/img/wn/${forecast.daily[4].weather[0].icon}@2x.png">`);
                        $('.temp-4').text(Math.round(forecast.daily[4].temp.day) + '°');
                        $('.desc-4').text(forecast.daily[4].weather[0].description).css('textTransform', 'capitalize');
                    })
                })
            })
        });
    }

const submit = () => {
    cityName = $('#cityName').val();
    myData();
}

myData();