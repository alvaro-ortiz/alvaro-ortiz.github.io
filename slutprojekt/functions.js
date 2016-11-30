function myFunction () {
//	document.getElementById("film").innerHTML = "Hello World";
	$(document).ready(function() {
		$.getJSON("films.json", function(data) {
			console.log(data);
			var movies = data.movieInfo;

			var items = data.movieInfo.map(function (item) {
				return formatMovie(item, item.indexOf());//item.filmTitle + ': ' + item.synopsis;
			});
			console.log(items);
/*			$.each(items) {
				var content = '"<li data-target="#carousel1" data-slide-to='
				content += '>' + items.join('</li><li>') + '</li>';
				var list = $('<ol />').html(content);
				$("#film").append(list);
			}*/

    	});
	});
}

function formatMovie(item, i) {
	var m = "<div class=\"item";
	if (i == 0) {
		m += " active";
	}
	m += "\">" + item.FilmTitle + "</div>";
	return m;
}