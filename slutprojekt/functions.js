function myFunction () {
//	document.getElementById("film").innerHTML = "Hello World";
	$(document).ready(function() {
		$.getJSON("films.json", function(data) {
			console.log(data);
			var items = data.movieInfo.map(function (item) {
				return item.filmTitle + ': ' + item.synopsis;
			});
			if (items.length) {
				var content = '<li>' + items.join('</li><li>') + '</li>';
				var list = $('<ul />').html(content);
				$("#film").append(list);
			}

    	});
	});
}