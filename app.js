function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("No support");
    }
  }

  function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude + " " + longitude);
    const key = "e14f5933d267004c2d3a342dba46828d";
    const weather = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=metric&appid=" + key;

    fetch(weather)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var temp = data.main.temp;
            var description = data.weather[0].description;
            var city = data.name;
            var country = data.sys.country;
            document.getElementById("weather").innerHTML = "<div id='loc'>" + city + ", " + country +  "</div><div id='temp'>" + temp + " °C</div><div id='description'>" + description + "</div>";
        })


    .catch(err => alert("Wrong city name!"))
  }
  


  getLocation();