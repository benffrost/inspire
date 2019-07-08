export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.icon = data.weather[0].icon
    this.city = data.name
    this.celcius = Math.round(parseFloat(data.main.temp) - 273.15)
  }

  get Template() {
    return `
      <div class="col-4"></div>
      <div class="col-1">
        <img src="http://openweathermap.org/img/wn/${this.icon}.png" alt="weather icon"></img>
      </div>
      <div class="col">
        <h1> ${this.celcius} &#176; Celcius</h1>
      </div>`
  }
}