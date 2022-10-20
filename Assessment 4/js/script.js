/*
    Assignment #4
    Name: - Rishi Patel
    Student ID: - 0793722
*/

$(function () {
    // your code here

    navigator.geolocation.getCurrentPosition(success, fail);

    function success(position){
       
        
        let currentLat = position.coords.latitude;
    
        let currentLon = position.coords.longitude;

        $("#locationhere").html(`<h2>Current Location:</h2><div>Latitude:  ${currentLat} <br/> Longitude:  ${currentLon}</div>`);
    
        let storedLatitude = localStorage.getItem('storedLat'); 
        let storedLongitude = localStorage.getItem('storedLon'); 
      
        if(storedLatitude && storedLongitude){

            $('#locationhere').append(`<h2>Retrived location from Local storage:</h2> <div id='stored'>Latitude: ${storedLatitude} </br> Longitude: ${storedLongitude}</div>`);

            $('#locationhere').append(`<h2 id='welcomeBack'>Welcome Back to the our page</h2>`);
            
            
            let lat2 = parseFloat(storedLatitude);
            let lon2 = parseFloat(storedLongitude);

            let distance = calcDistanceBetweenPoints(currentLat, currentLon, lat2,lon2);
            let distanceKm = distance/1000;
            
            $('#locationhere').append(`<h3>You travelled total ${distanceKm.toFixed(4)} km</h3>`);
            localStorage.setItem('storedLat', currentLat);
            localStorage.setItem('storedLon', currentLon);
           
        
        }
        else{            
            $('#locationhere').append(`<h2>Welcome to our page for first time!!</h2>`);
            localStorage.setItem('storedLat', currentLat);
            localStorage.setItem('storedLon', currentLon);
            
        }
    } 
       
    
    function fail(){
        alert("Sorry!! You must allow geolocation.");
    }


    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});
