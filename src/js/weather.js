const weather = () => {
    let lon,
        lat,
        temperatureDescription = document.querySelector('.temperature-description'),
        temperatureDegree = document.querySelector('.temperature-degree'),
        locationTimezone = document.querySelector('.location-timezone');
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/',
                  api = `${proxy}api.openweathermap.org/data/2.5/weather?q=Moscow&lang=ru&appid=c15ebc9ffd7cab5cd613d4363fccbca2`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    // console.log(data);
                    const {weather, main, name} = data;
                    // Set DOM Elements from API
                    temperatureDegree.textContent = Math.round(main.temp - 273.15);
                    temperatureDescription.textContent = weather[0]['description'];
                    locationTimezone.textContent = name;
                    
                });
        });
    } else {
        h1.textContent = "Что-то пошло не так";
    }

    setTimeout(weather, 100000);
};

export default weather;