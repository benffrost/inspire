import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
	//console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
	document.querySelector("#weather").innerHTML = _weatherService.Weather.Template
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
