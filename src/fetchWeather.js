const weathersettings = {
	"async": true,
	"crossDomain": true,
	"url": "https://aerisweather1.p.rapidapi.com/forecasts/Beijing,cn?plimit=24",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "2d55c09101msh7fe549476fd9210p129072jsn309a614ed4cf",
		"x-rapidapi-host": "aerisweather1.p.rapidapi.com"
	}
};


function fetchWeather() {
    var city = document.getElementById("cityName").value;
    var countrycode = document.getElementById("CountryCode").value;
    var date = document.getElementById('selectedDate').value
    var textori;
    var textnew = '';
    weathersettings.url = 'https://aerisweather1.p.rapidapi.com/forecasts/' + city + ',' + countrycode + '?from=' + date + '&plimit=1';
    $.ajax(weathersettings).done(function (response) {
    	console.log(JSON.stringify(response.response[0].periods[0].validTime,null,4));
        console.log(typeof(response.response[0].periods));
        console.log(typeof(response.response[0].periods[0]));
    	textori = response.response[0].periods.length;
    	text = JSON.stringify(response.response[0].periods,null,4);
        for (var i = 0,len = textori; i<len;i++){
        if(i==0){
            textnew = " Seleted Date: "+ response.response[0].periods[i].validTime +"\n Lowest Temperature(c): " + response.response[0].periods[i].minTempC
                      +"\n Highest Temperature(C): " +response.response[0].periods[i].maxTempC + '\n Weather: ' + response.response[0].periods[i].weatherPrimary
        }else{
            textnew = textnew+ "\n Selected Date: "+ response.response[0].periods[i].validTime +"\n Lowest Temperature(c): " + response.response[0].periods[i].minTempC
                      +"\n Highest Temperature(C): " +response.response[0].periods[i].maxTempC + '\n Weather: ' + response.response[0].periods[i].weatherPrimary
        }
        document.getElementById("weatherlist").innerHTML= "weatherlist:\n" + textnew;
        }
    });


}