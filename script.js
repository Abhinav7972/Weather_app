
const input = document.querySelector('input#addr');
const button = document.querySelector('button#get-weather');
const para = document.querySelector('p#display-weather')
//GEOCODE API :  https://geocode.maps.co/search?q=555+5th+Ave+New+York+NY+10017+US&api_key=YOUR_SECRET_API_KEY

//geocode maps url
const GEOCODING_API_URL = 'https://geocode.maps.co/search?';

//open mentro API : https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=moon_phase&hourly=temperature_2m&timezone=GMT

//open metro api url 
const OPEN_METRO_API_URL = 'https://api.open-meteo.com/v1/forecast?'


//open metro api weather code desc 
const weatherDescriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Slight snowfall",
    73: "Moderate snowfall",
    75: "Heavy snowfall",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    97: "Heavy thunderstorm",
    99: "Thunderstorm with heavy hail"
};




function getCordinate()
{

const search_value = input.value;
    

const params = new URLSearchParams({
q:search_value,
api_key: API_KEY
});

const url = GEOCODING_API_URL + params.toString();

 return fetch(url)
 .then((res)=>{
    if(!res.ok)
    {
        throw new Error('API request failed')
    }
    return res.json()
})
 .then((cordinate)=>{
  if (cordinate.length === 0) {
            throw new Error('Location not found');
        }

  let lat = cordinate[0].lat;
  let lon = cordinate[0].lon;

  //console.log(lat,lon)
  return {
    lat:lat,
    lon:lon
  }
  //console.log(cordinate)
 })
 
}



function getWeather()
{
    if (!input.value.trim()) {
        console.error('Please enter an address');
        return;
    }
   getCordinate()
   .then((cordinate)=>{
    let lon = Number(cordinate.lon);
    let lat = Number(cordinate.lat);
    const params = new URLSearchParams({
    latitude: lat,
    longitude: lon,
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,rain,weather_code'
});
    const weather_URL = OPEN_METRO_API_URL + params.toString();

    return fetch(weather_URL)
   })
   .then((res)=>{
    if(!res.ok)
    {
        throw new Error('API request failed')
    }
    return res.json()
   })
   .then((weather_Data)=>{
    let weather_code = weather_Data.current.weather_code;
    const desc = weatherDescriptions[weather_code];
    let temp = weather_Data.current.temperature_2m;

    para.textContent = input.value+" "+desc+" "+temp;
    console.log(input.value+" "+desc+" "+temp)
    
   })
   .catch((error)=>{
    console.error(error.message)
   })
}


button.addEventListener('click',getWeather);