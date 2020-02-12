    function submit() {
        var city = document.getElementById("cityName").value;
        var country = document.getElementById('country').value;
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"," + country+"&units=imperial&APPID=8c805a236f343d5723869bf3cdcb969a";
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            document.getElementById('cityInfo').innerHTML=response.name +", " + response.sys.country;
            document.getElementById('weatherInfo').innerHTML="Current Tempurature: " +response.main.temp +"°";
            document.getElementById('max').innerHTML="High of " +response.main.temp_min+"°";
            document.getElementById('min').innerHTML="Low of " +response.main.temp_max+"°";
            document.getElementById('description').innerHTML="Expect " + response.weather[0].description;
            if(response.weather[0].main.includes("Clouds")){
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/xT0xeifG3YWtHJ4HQI/giphy.gif')";
            }
            else if(response.weather[0].main.includes('Thunderstorm')){
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/rvdUftzA8567u/giphy.gif')";
            }
            else if(response.weather[0].main.includes('Thunderstorm')){
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/l4EpgC7V0bObAxeVy/giphy.gif.gif')";
            }
            else if(response.weather[0].main.includes('Rain')){
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/dI3D3BWfDub0Q/giphy.gif')";
            }
            else if(response.weather[0].main.includes('Snow')){
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/mHIBxnt87chc4/giphy.gif')";
            }   
            else if(response.weather[0].main.includes('Clear')){
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/xThta5hSxANYRimlP2/giphy.gif')";
            } 
            else if(response.weather[0].main.includes('Mist')){
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/Z98zIhtiePuIo/giphy.gif')";
            }
            else if(response.weather[0].main.includes('Haze')){
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/6hNJHnfsuoFDa/giphy.gif')";
            } 
            else if(response.weather[0].main.includes('Fog')){
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/ZWRCWdUymIGNW/giphy.gif')";
            } 
            else if(response.weather[0].main.includes('Tornado')){
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/1dLzOOFcue96U/giphy.gif')";
            }  
            else{
                document.body.style.backgroundImage = "url('https://media.giphy.com/media/PLJzdMVafDLTW/giphy.gif')";
            } 
        });
    }
