$(function () {
     		 
    console.log("hello"); 		 +
     		 	//Function to get json data
     		 	function getWeatherData(zipcode) {
 		 		var apikey = $('#apikey').val();
 		console.log("apikey=" + apikey);
 		console.log("zipcode=" + zipcode);
 		var weatherApi = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&appid=' + apikey;
 		$.getJSON(weatherApi)
 			.done(function (data) {
 			addNewItem(data);
 			}).fail(function () {
 				$('#form').append('<p> Can not load data </p>');
 			});
 	}
 	$('form').on('submit', function (e) {
 		e.preventDefault();
 		$('#weather').remove();
 		getWeatherData($('#zip').val());
 	});
 	
 	function addNewItem(data){
 		data += '<h3>The weather info for' + ' ' + data.name + '</h3>';
 		data += '<p>Current Temperature: ' + convertTemp(data.main.temp) + '</p>';
 		data += '<p>' + data.weather[0].description + '</p>';
 		$('#form').append('<div id = weather>' + data + '</div>');
 	}
 	function convertTemp (temp){
 		return Math.round((temp * 1.8) - 459.67);
 	}
 	
 });
