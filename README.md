# Weather App

This project is a simple front-end weather application built with HTML, CSS, and JavaScript. It takes a place name or address, converts it into geographic coordinates using the Geocode API, and then fetches current weather data from Open-Meteo.

## Features

- Search the weather for any address or location name
- Convert user input into latitude and longitude via Geocode Maps
- Fetch current weather conditions from Open-Meteo
- Translate weather codes into readable descriptions
- Display results directly on the page in a clean weather card UI
- Lightweight static app with no build step or framework

## Current status

The app is working as a front-end prototype with a polished interface:

- A weather search form with a modern card layout
- Input field and button for entering a location
- Real API calls to Geocode Maps and Open-Meteo
- Weather conditions shown in the browser UI
- Responsive styling for desktop and mobile screens

## Project structure

- `index.html` – page structure and app layout
- `style.css` – styling and responsive design
- `script.js` – geocoding logic, weather fetch logic, and UI updates
- `config.js` – API key configuration
- `README.md` – project documentation

## Setup

1. Clone the repository.
2. Get a free API key from Geocode Maps: https://geocode.maps.co/
3. Open `config.js` and replace the placeholder with your real key:

```js
const API_KEY = 'YOUR_API_KEY';
```

4. Start a local web server from the project folder:

```bash
python -m http.server 8000
```

5. Open `http://localhost:8000` in your browser.
6. Enter a place such as "New York", "Bengaluru", or a full address and click the button.

## How it works

1. The user enters a location name or address.
2. The app sends that value to the Geocode API with the configured API key.
3. The first matching result is used to obtain latitude and longitude.
4. Those coordinates are passed to the Open-Meteo forecast API.
5. The weather code and temperature are converted into readable output and displayed in the UI.

## Notes

- A valid Geocode API key is required for location lookup.
- The app is a static front-end project and does not require any package installation.
- Weather data is fetched live from public APIs, so internet access is required while using it.
- This project is ideal for learning how to combine multiple APIs in a simple JavaScript app.
