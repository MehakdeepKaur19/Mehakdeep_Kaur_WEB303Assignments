/*
    Assignment #4
    Mehakdeep Kaur
*/

$(function () {
    // your code here
    if(!navigator.geolocation.getCurrentPosition){
        console.log("Please enable your location! ");
    }
    else{
        navigator.geolocation.getCurrentPosition(success, fail);
        function success(position){
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            $("#locationhere").html("<p>Latitude: "+lat+"</p>");
            $("#locationhere").append("<p>Longitude: "+lon+"</p>")

            let storelocation = localStorage.getItem("#locationhere");
            if(storelocation){
                storelocation = JSON.parse(storelocation);
                let storelat = storelocation.coords.latitude;
                let storelon = storelocation.coords.longitude;
                $("#locationhere").append("<p> Presaved Latitude: "+storelat+"</p>");
            $("#locationhere").append("<p>Presaved Longitude: "+storelon+"</p>")
            }
            else{
                $("header").text("Welcome to E Corp!");
            }
        }
        function fail(){
            $("#locationhere").html("<h1>Please allow your geolocation</h1>");
        }
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


