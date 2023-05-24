let latitude, longitude, destiantion;

$(document).ready(function(){
    alert("please allow the device to know your location")
    initGeolocation();
})

$(function (){
    $("#navigate-button").click(function (){
        window.location.href = 'ar_navigation_html'
    })
})

function initGeolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success);
        
    }
    else{
      alert("sorry your browser does not support geolocation services")
    }
}

function success(position){
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;

    // Initializing Mapbox
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';
    
    var map = new mapboxgl.Map({
        container: 'map',
        style:'mapbox://styles/mapbox/streets-v11',
        center:[latitude,longitude],
        zoom:16
    });
}