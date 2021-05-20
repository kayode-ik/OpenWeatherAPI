
var city = "jibowu";



$.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+
 city + "&appid=e87e5e7b76a3a17cad4463ad9d344923 ",
 function(data) {
    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

    var temp = Math.floor(data.main.temp);
    var weathername = data.weather[0].main;

    console.log(temp);

    $('.icon').attr('src', icon);
    $('.weather').append(weathername);
    $('.temp').append(temp);
    // console.log(icon);

});