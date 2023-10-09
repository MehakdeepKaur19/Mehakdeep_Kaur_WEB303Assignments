$(function () {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported in your browser.");
    } else {
      navigator.geolocation.getCurrentPosition(success, fail);
  
      function success(position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let accuracy = position.coords.accuracy;

        $("#locationhere").html(
            "<p>Latitude: " + lat + "</p>" +
            "<p>Longitude: " + lon + "</p>" +
            "<p>Accuracy: " + accuracy.toFixed(2) + " meters</p>"
        );
        
        let storeLocation = localStorage.getItem("location");
  
        if (storeLocation) {
          storeLocation = JSON.parse(storeLocation);
          let storeLat = storeLocation.latitude;
          let storeLon = storeLocation.longitude;
  
          let distance = calcDistanceBetweenPoints(lat, lon, storeLat, storeLon);
  
          $("#locationhere").append(
            "<p>Stored location: Latitude " +
              storeLat +
              " Longitude " +
              storeLon +
              " Distance traveled: " +
              distance.toFixed(2) +
              " meters</p>"
          );
  
          $("header").append("<h2>Welcome to E Corp! You have traveled " +distance.toFixed(2) +" meters.</h2>");
        } else {
          $("header").html("<h2>Welcome to E Corp!</h2>");
            $("#locationhere").html("<p>Latitude: "+lat+"</p>");
            $("#locationhere").append("<p>Longitude: "+lon+"</p>")

            let storelocation = localStorage.getItem('key');
            if(storelocation){
                let storelat = storelocation.coords.latitude;
                let storelon = storelocation.coords.longitude;
                
                let distance = calcDistanceBetweenPoints(lat,lon,storelat,storelon);
                $("#locationhere").append("<p>Stored loaction: Latitude" +storelat+" Longitude: "+storelon+" Distance traveled: "+distance+"</p>")
                $("header").append("<h2>Welcome to E Corp! You have traveled"+distance+"<h2>");
            }
            else{
                $("header").text("Welcome to E Corp!");
            }
        }
        function fail(){
            $("#locationhere").html("<h1>Please allow your geolocation</h1>");
        }
      }
  
      function fail() {
        $("#locationhere").html("<h1>Please allow your geolocation</h1>");
      }
    }
  
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
      var toRadians = function (num) {
        return (num * Math.PI) / 180;
      };
      var R = 6371000; // radius of Earth in meters
      var φ1 = toRadians(lat1);
      var φ2 = toRadians(lat2);
      var Δφ = toRadians(lat2 - lat1);
      var Δλ = toRadians(lon2 - lon1);
  
      var a =
        Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
      return R * c;
    }
  });
  