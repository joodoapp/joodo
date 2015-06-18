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
		$(".modal.add-story-modal")
			.modal("show");
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

Template.addStory.rendered = function(e){
	//Initalize addStory, startDate endDate modals
	// $(".add-story-start-modal, .add-story-end-modal, .add-story-modal").modal({
	// 	closable: false
	// });

	// $(".add-story-start-btn").on("click", function(e){
	// 	console.log(e);
	
		// $(".add-story-start-modal").modal("show");
		$(".add-story.start-date").pickadate({
			container: "#start-date-picker"
		});
		// $(".add-story.start-date").pickadate("open");
	// })
	$(".add-story-end-btn").on("click", function(e){
		console.log(e);
		// $(".add-story-modal.end-date").pickadate({
			// container: "#end-date-picker"
		// });
		$(".add-story-modal").modal("hide")
		$(".add-story-end-modal").modal("show")
		
		// $(".add-story-modal.end-date").pickadate();
	})
}