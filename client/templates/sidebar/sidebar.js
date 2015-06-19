sidebar = {
	// init: function() {
	// 	console.log("sidebar.init");
	// 	var canvas = $("#timeline-canvas");
	// 	var svg = d3.select("#timeline-canvas")
	// 		.append("svg")
	// 		.attr("width", canvas.width())
	// 		.attr("height", canvas.width()*4)

	// 	var c = svg.append("circle")
	// 		.attr("r", 10)
	// 		.attr("cx", 40)
	// 		.attr("cy",200)
	// 		.style({
	// 			"fill":"black",
	// 			"stroke":"gray",
	// 			"stroke-width":5
	// 		})
	// },
	init: function() {
		//Reset newStory Session variables
		newStory.init();
		//
	},
	addStoryModal: function() {
		//Init both add-story-modal and add-story-date-modal
		$(".modal.add-story-modal")
			.modal({
				closable: false,
				onShow: function(){
					console.log(Session);
				},
				onDeny: function(){
					console.log("addStory deny");
				},
				onApprove: function(){
					console.log("addStory approve");
					//Need to validate
					var story = newStory.get();
					console.log(story);
					//Close side menu and go to context
					// side.close();
					// nav.open();
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


// addStory MODAL TEMPLATE
//This is the modal for adding a new story
Template.addStory.rendered = function(e){
	//Start location search
	$(".add-story-search")
		.search({
			source: [{ title: 'Andorra' },{ title: 'United Arab Emirates' },  { title: 'Afghanistan' },  { title: 'Antigua' },  { title: 'Anguilla' },  { title: 'Albania' },{ title: 'Armenia' },  { title: 'Netherlands Antilles' },  { title: 'Angola' },  { title: 'Argentina' },  { title: 'American Samoa' }]
		});
	//Start date picker
	$(".add-story-start-date").datepicker();
};
Template.addStory.events({
	//Keep track of addStory inputs in Session variables
	"keydown .add-story-name": function(e){
		console.log("change addstoryname", e);

	}
});