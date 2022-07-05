class Weather {
  constructor(city, state) {
    this.apiKey = '3265874a2c77ae4a04bb96236a642d2f';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`, { origin: "cors" });

    const responseData = await response.json();

    console.log(responseData);

    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}