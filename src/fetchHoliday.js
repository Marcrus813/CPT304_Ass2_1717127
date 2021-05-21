const settings = {
    "async": true,
	"crossDomain": true,
	"url": "https://public-holiday.p.rapidapi.com/2019/US",
	"dataType": 'JSON',
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "2d55c09101msh7fe549476fd9210p129072jsn309a614ed4cf",
		"x-rapidapi-host": "public-holiday.p.rapidapi.com"
    }
}

function fetchHolidays(){
    var year = document.getElementById("year").value;
    var countrycode = document.getElementById("CountryCode").value;
    var raw;
    settings.url = "https://public-holiday.p.rapidapi.com/"+ year + "/" + countrycode;
    $.ajax(settings).done(function (response) {
    	console.log(JSON.stringify(response,null,4));
    	raw = response;
    	var text = JSON.stringify(response,null,4);
    	if (JSON.parse(text)){
    	console.log("true");
    	}else{
    	console.log("false");
    	}
    	console.log(text);
    	console.log(raw);
    	document.getElementById("holidaylist").innerHTML= "holidaylist:\n" + text;
        return text;
    }); 
}