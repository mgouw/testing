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
    //var latitude = 47.6211;
    //var longitude = -122.3244;
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
            var rainimg = ['rain','showerrain','raindrop'];
            var cloudsimg = ['fewclouds','brokenclouds','scatteredclouds','cloudy','cloud'];
            var skyimg = ['clearsky','sunny'];
            document.getElementById("weather").innerHTML = "<div id='loc'>" + city + ", " + country +  "</div><div id='temp'>" + temp + " °C</div><div id='description'>" + description + "</div>";

            if (description.includes('rain') ){
              var input = rainimg[Math.floor(Math.random() * rainimg.length)]
              document.getElementsByClassName("hero-image")[0].style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)),url(\'img/bgimage/'+input+'.jpg\')';
            } else if(description.includes('clouds')){
              var input = cloudsimg[Math.floor(Math.random() * cloudsimg.length)]
              document.getElementsByClassName("hero-image")[0].style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)),url(\'img/bgimage/'+input+'.jpg\')';
            } else if(description.includes('mist')){
              document.getElementsByClassName("hero-image")[0].style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)),url(\'img/bgimage/mist.jpg\')';
            } else if(description.includes('clear')){
              var input = skyimg[Math.floor(Math.random() * skyimg.length)]
              document.getElementsByClassName("hero-image")[0].style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)),url(\'img/bgimage/clearsky.jpg\')';
            } else if(description.includes('snow')){
              document.getElementsByClassName("hero-image")[0].style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)),url(\'img/bgimage/snow.jpg\')';
            } else if(description.includes('thunderstorm')){
              document.getElementsByClassName("hero-image")[0].style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)),url(\'img/bgimage/thunderstorm.jpg\')';
            } else{
              document.getElementsByClassName("hero-image")[0].style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)),url(\'img/bgimage/else.jpg\')';
            }
        })


    //.catch(err => alert("Wrong city name!"))
  }



  getLocation();
