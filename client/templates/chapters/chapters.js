chapters = {
	init: function() {
		console.log("sidebar.init");
		console.log(Meteor.user())
		var canvas = $("#timeline-canvas");
		var svg = d3.select("#timeline-canvas")
			.append("svg")
			.attr("width", canvas.width())
			.attr("height", canvas.width()*4)

		var c = svg.append("circle")
			.attr("r", 10)
			.attr("cx", 40)
			.attr("cy",200)
			.style({
				"fill":"black",
				"stroke":"gray",
				"stroke-width":5
			})

	}
};