# Weather App

A lightweight weather application built with plain HTML, CSS, and JavaScript. The app takes a location string, converts it to coordinates using the Geocode API, and then fetches the current weather from Open-Meteo.

## Features

- Search weather by address or place name
- Geocode user input into latitude and longitude
- Fetch current weather data from Open-Meteo
- Map weather codes to readable descriptions
- No framework or build tools required

## Project structure

- `index.html` – app markup
- `style.css` – page styling
- `script.js` – weather logic and API calls
- `config.js` – API key configuration
- `README.md` – project documentation

## Setup

1. Clone this repository.
2. Sign up for a free Geocode API key at https://geocode.maps.co/
3. Open `config.js` and replace the sample key with your own:

```js
const API_KEY = 'YOUR_API_KEY';
```

4. Start a local web server in the project folder:

```bash
python -m http.server 8000
```

5. Open `http://localhost:8000` in your browser.
6. Enter a location (for example, "New York" or "1600 Amphitheatre Parkway") and click the button.

## Notes

- The app currently logs the resulting temperature and weather description to the browser console.
- This project is a static front-end app and does not include a package manager or build pipeline.
- If you do not have a valid Geocode API key, the app will not be able to resolve locations.
