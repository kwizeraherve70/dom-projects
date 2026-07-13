
const apiKey = "d54b108e96c80d6717d844eba8dad9a6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
	if (!city) return;
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
	var data = await response.json();

	console.log(data);

	document.querySelector('.city').innerHTML = data.name;
	document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
	document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
	document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
}

document.getElementById('btn').addEventListener('click', function () {
	const city = document.getElementById('city').value.trim();
	checkWeather(city);
});

// optional: fetch a default city on load
checkWeather('Bangalore');

