//gets current city weather and 5 day forecast from WeatherAPI
export async function fetchCityWeather(cityId, apiKey) {
  const endpoint = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=id:${cityId}&days=6`;
  let weatherData = {};
  weatherData.id = cityId;

  await fetch(endpoint)
    .then((response) => response.json())
    .then(
      (data) => (weatherData = { ...weatherData, ...formatWeatherData(data) })
    )
    .catch((err) => (weatherData = {}));

  return weatherData;
}

//retrieve only data needed for application
function formatWeatherData(response) {
  let data = {};
  data.city = response.location.name;
  data.region = response.location.region;
  data.date = response.location.localtime;
  data.currentWeather = {
    precipitationAmount: response.current.precip_in,
    temperature: response.current.temp_f,
    icon: response.current.condition.icon,
  };

  data.airConditions = {
    realFeel: response.current.feelslike_f,
    windSpeed: response.current.wind_mph,
    humidity: response.current.humidity,
    uvIndex: response.current.uv,
  };

  let weeklyForecast = [];
  response.forecast.forecastday.forEach((day) => {
    weeklyForecast.push({
      date: day.date,
      icon: day.day.condition.icon,
      iconText: day.day.condition.text,
      min: day.day.mintemp_f,
      max: day.day.maxtemp_f,
    });

    data.weeklyForecast = weeklyForecast;
  });

  data.dailyForecast = getHourlyForecast(
    response.forecast.forecastday,
    response.current.last_updated_epoch
  );
  return data;
}

//gets 24 hour forecast in 4 hour incremenets
function getHourlyForecast(forecast, localEpoch) {
  const hourArray = forecast[0].hour;

  let data = hourArray.filter((hourData) => hourData.time_epoch > localEpoch);
  data = [...data, ...forecast[1].hour];

  let hourlyForecast = [];
  let index = 0;

  while (hourlyForecast.length < 6) {
    hourlyForecast.push({
      time: data[index].time,
      temp: data[index].temp_f,
      icon: data[index].condition.icon,
      iconText: data[index].condition.text,
    });
    index += 4;
  }

  return hourlyForecast;
}
