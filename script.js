const input = document.querySelector('input#addr');
const button = document.querySelector('button#get-weather');

const GOOGLE_MAPS_GEOCODE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';

button.addEventListener('click',()=>{
    const  inputAddrStr = input.value;

    console.log(inputAddrStr)
})