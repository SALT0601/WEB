const APT_KEY = "1d853d1862a5f996c9ec6b0a8f92c7b3"


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APT_KEY}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector(".info");
            const city = document.querySelector(".city");
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
        });
}


function onGeoError(){
    alert("Can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);