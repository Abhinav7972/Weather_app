# Weather App

This project is a simple front-end weather application built with HTML, CSS, and JavaScript. It allows users to enter a location, converts that location into coordinates using the Geocode API, and fetches the current weather information from Open-Meteo.

## Current progress

The app is in a working prototype stage:

- A location input field and button are included in the page
- The user can type an address or place name
- The app fetches latitude and longitude from the Geocode API
- The latitude and longitude are passed to Open-Meteo for current weather data
- Weather codes are mapped to readable human-friendly descriptions
- The current temperature and weather condition are logged in the browser console

## Features

- Search weather by address or place name
- Geocode user input into coordinates
- Fetch real-time weather data from Open-Meteo
- Convert weather codes into readable labels
- Lightweight static app with no framework setup

## Project structure

- `index.html` – page structure and app entry point
- `style.css` – styling for the interface
- `script.js` – fetch logic, weather mapping, and event handling
- `config.js` – API key configuration file
- `README.md` – project documentation

## Setup

1. Clone the repository.
2. Get a free API key from Geocode Maps: https://geocode.maps.co/
3. Open `config.js` and replace the example key with your real key:

```js
const API_KEY = 'YOUR_API_KEY';
```

4. Run a local web server from the project directory:

```bash
python -m http.server 8000
```

5. Open `http://localhost:8000` in your browser.
6. Enter a location such as "New York" or "Bengaluru" and click the button.

## How it works

1. The user enters a place name or address.
2. `script.js` reads the input and calls the Geocode API using `API_KEY`.
3. The first matching result is used to get latitude and longitude.
4. The app calls the Open-Meteo weather endpoint with those coordinates.
5. The current weather details are extracted and displayed in the console.

## Notes

- This is a static front-end app and does not yet have a polished UI or a persistent weather display.
- The project currently logs the result to the browser console instead of rendering it on the page.
- A valid Geocode API key is required to resolve location names.
- Future improvements may include a better weather card, error messages, and a more user-friendly interface.
