//Fetch JSON data and format the carousel on the page
function handleJSON () {
//	document.getElementById("film").innerHTML = "Hello World";
	$(document).ready(function() {
		$.getJSON("films.json", function(data) {
//			console.log(data);
			var movies = data.movieInfo;

			var items = data.movieInfo.map(function (item) {
				return formatMovie(item);
			});
//			console.log(items);
			var indicators = '<ol class="carousel-indicators">';
			var slides = '<div class="carousel-inner" role="listbox">';
			$.each(items, function(index, value) {
				indicators += '<li data-target="#carousel1" data-slide-to="' + index + '"';
				if (index == 0) {
					indicators += ' class="active"';
					value = value.replace('class="item"','class="item active"');
				}
				slides += value;
				indicators += '></li>';
//				console.log(index + ":" + value);
			});
			indicators += "</ol>";
			slides += "</div>";
//			console.log(slides);
			var controls = '<a class="left carousel-control" href="#carousel1" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a>';
			controls += '<a class="right carousel-control" href="#carousel1" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></a>';
			var content = '<div id="carousel1" class="carousel slide" data-ride="carousel" data-interval="10000">' + indicators + slides + controls;
			document.getElementById("welcome").style.visibility = "hidden";
			document.getElementById("welcome").style.display = "none";
			document.getElementById("formDiv").style.visibility = "hidden";
			document.getElementById("formDiv").style.display = "none";
			$("#film").html(content);
    	});
	});
}

//Show movie title and synopsis inside carousel
function formatMovie(item) {
	var obj = new Object();
	var m;
	$.each(item, function(key, value) {
		obj[key] = value;
	});
//	console.log(item);
	m = "<div class=\"item\">";
	m += '<img src="' + obj.poster + '" alt="' + obj.filmTitle + '">';
	m += '<div class="carousel-caption" style="background-color:rgba(0, 0, 0, 0.5)"><h3><a href="http://www.imdb.com/title/' + obj.imdb + '/" target="_blank">' + obj.filmTitle + "</a></h3>";
	m += '<h6>' + obj.releaseDate + '<br><a href="https://youtu.be/' + obj.trailer + '" target="_blank">[ Trailer ]</a></h6>';
	m += obj.synopsis; 
	m += "</div></div>";
	return m;
}

//Reset page to default
function resetPage() {
	document.getElementById("film").innerHTML = "";
	document.getElementById("welcome").style.visibility = "visible";
	document.getElementById("welcome").style.display = "block";
	document.getElementById("formDiv").style.visibility = "hidden";
	document.getElementById("formDiv").style.display = "none";
}

function toggleElement(e) {
	$(e).toggle();
}

function showForm() {
	document.getElementById("film").innerHTML = "";
	document.getElementById("welcome").style.visibility = "hidden";
	document.getElementById("welcome").style.display = "none";
	document.getElementById("formDiv").style.visibility = "visible";
	document.getElementById("formDiv").style.display = "block";
}