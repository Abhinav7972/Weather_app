const input = document.querySelector('input#addr');
const button = document.querySelector('button#get-weather');

const GOOGLE_MAPS_GEOCODE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';

button.addEventListener('click',()=>{
    const  inputAddrStr = input.value;

    const params = new URLSearchParams({
     address : inputAddrStr,
     key : API_KEY
    })

    const url = GOOGLE_MAPS_GEOCODE_URL + params;

    console.log(inputAddrStr)
})