const Hotelsettings = {
	"async": true,
	"crossDomain": true,
	"url": 'https://hotels4.p.rapidapi.com/locations/search?query=Suzhou',
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "2d55c09101msh7fe549476fd9210p129072jsn309a614ed4cf",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
};

var hotelinfo;
function fetchHotels() {
    var city = document.getElementById("cityName").value
    Hotelsettings.url = 'https://hotels4.p.rapidapi.com/locations/search?query=' + city,
    $.ajax(Hotelsettings).done(function (response) {
        //alert(Hotelsettings.url)
        hotelinfo = JSON.stringify(response.suggestions[1].entities,null,4);
    	console.log(hotelinfo);
    	document.getElementById("hotellist").innerHTML= "holidaylist:\n" + hotelinfo;
        return hotelinfo;
    });
}