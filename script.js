
const input = document.querySelector('input#addr');
const button = document.querySelector('button#get-weather');

//https://geocode.maps.co/search?q=555+5th+Ave+New+York+NY+10017+US&api_key=YOUR_SECRET_API_KEY


const GEOCODING_API_URL = 'https://geocode.maps.co/search?';

function getCordinate()
{

const search_value = input.value;
    
const params = new URLSearchParams({
q:search_value,
api_key: API_KEY
});

const url = GEOCODING_API_URL + params;

 fetch(url)
 .then((res)=>{return res.json()})
 .then((cordinate)=>{console.log(cordinate)})
}


button.addEventListener('click',getCordinate);