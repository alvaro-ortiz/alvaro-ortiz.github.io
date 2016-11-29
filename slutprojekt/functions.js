function myFunction () {
//	document.getElementById("film").innerHTML = "Hello World";
	$(document).ready(function() {
		$.getJSON("films.json", function(data) {
			$.each(data.movieInfo, function() {
				$("film").append("<li>Car ID: " + this[movieInfo[0].synopsis]);

        	});         
    	});     
	});
}