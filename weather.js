$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.
    // var alert = "<br><a>Weather Alerts<br>" + data.alerts[0].uri + "</a><br>";

    var overview = "<h4>" + data.currently.summary + "</h4>Current Temperature: " +
      data.currently.temperature + "°F<br>Wind Speed: " + data.currently.windSpeed +
      "<br> Humidity: " + data.currently.humidity*100 + "%";

    var thisweek = "<h2>This Week's Forecast</h2><h4>" + data.daily.summary + "</h4>";

    var tomorrow = "<h2>Tomorrow's Forecast</h2><h4>" +
      data.daily.data[0].summary + "</h4>High Temp: " + data.daily.data[0].temperatureMax
      + "°F<br>Low Temp: " + data.daily.data[0].temperatureMin + "°F<br>Humidity: " +
      data.daily.data[0].humidity*100 + "%";

    var dayaftertom = "<h2>Forecast in 2 Days</h2><h4>" +
      data.daily.data[1].summary + "</h4>High Temp: " + data.daily.data[1].temperatureMax
      + "°F<br>Low Temp: " + data.daily.data[1].temperatureMin + "°F<br>Humidity: " +
      data.daily.data[1].humidity*100 + "%";

    var daysaway = "<h2>Forecast in 3 Days</h2><h4>" +
      data.daily.data[2].summary + "</h4>High Temp: " + data.daily.data[2].temperatureMax
      + "°F<br>Low Temp: " + data.daily.data[2].temperatureMin + "°F<br>Humidity: " +
      data.daily.data[2].humidity*100 + "%<br><br>";

    var markup = "<h2>Current Weather</h2>" + overview +
      "<br>" + thisweek + tomorrow + dayaftertom + daysaway;


    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
