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
			.modal({
				closable: false,
				onDeny: function(){
					console.log("addStory deny");
				},
				onApprove: function(){
					console.log("addStory approve");
				}
			})
			.modal("show");
	}
};

// sidebar TEMPLATE
//This is the sidebar template that SemanticUI is transitioning
Template.sidebar.events({
	"click .add-story-button": function(e){
		sidebar.addStoryModal();
	}
});

Template.addStory.rendered = function(e){
	//Start location search
	$(".add-story-search")
		.search({
			source: [{ title: 'Andorra' },{ title: 'United Arab Emirates' },  { title: 'Afghanistan' },  { title: 'Antigua' },  { title: 'Anguilla' },  { title: 'Albania' },{ title: 'Armenia' },  { title: 'Netherlands Antilles' },  { title: 'Angola' },  { title: 'Argentina' },  { title: 'American Samoa' }]
		});
	//Start date picker
	$(".add-story-start-date").datepicker();
	//End date picker
	$(".add-story-end-date").datepicker();
}