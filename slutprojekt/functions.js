function myFunction () {
//	document.getElementById("film").innerHTML = "Hello World";
	$(document).ready(function() {
		$.getJSON("films.json", function(data) {
			console.log(data);
			var items = data.items.map(function (item) {
				return item.key + ': ' + item.value;
			});
			if (items.length) {
				var content = '<li>' + items.join('</li><li>') + '</li>';
				var list = $('<ul />').html(content);
				$("#film").append(list);
			}

    	});
	});
}