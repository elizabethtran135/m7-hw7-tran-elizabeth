//creating a variable
var xmlhttp = new XMLHttpRequest();

//adding state change event handler to API request
xmlhttp.onreadystatechange = function() {
    //if state change successful
    if (this.readyState == 4 && this.status == 200) {

      //storing API object inside API result
        var apiResult = JSON.parse(this.responseText);

        //variables for the weather information
        var name = document.createTextNode(apiResult.name);
        var weather = document.createTextNode(apiResult.weather.description);

        var cityWeather = document.getElementById('white')

        cityWeather[0].appendChild(name);
        cityWeather[1].appendChild(weather);

        //Code Dealing With The API Data Goes Here

    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=33137,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
