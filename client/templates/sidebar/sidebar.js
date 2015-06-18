sidebar = {
	init: function() {
		console.log("sidebar.init");
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
		// var o = {teller: "asd",name:"name",start:new Date(),end:new Date(),chapters:[]};
		// Meteor.call("addStory", o);
	},
	addStoryModal: function() {
		//Init both add-story-modal and add-story-date-modal
		$(".basic.modal.add-story-modal")
			.modal("show");
		$(".add-story-modal.start-date")
			.pickadate();
	}
};

// sidebar TEMPLATE
//This is the sidebar template that SemanticUI is transitioning
Template.sidebar.events({
	"click .add-story-button": function(e){
		console.log("click .add-story-button", e);
		sidebar.addStoryModal();
	}
});