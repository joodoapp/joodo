login = {
	open : function() {
		$(".ui.modal.login-modal")
			.modal({
				closable: false,
				transition: "vertical flip",
				onApprove: function() {
					//Only leave login modal if they're signed in
					if (!Meteor.user()) {return false}
				}
			})
			.modal("show");
		nav.open();
		side.close();
	},
	close : function() {
		$(".ui.modal.login-modal").modal("hide");
		// nav.close();
		side.open();
	}
};
nav = {
	open: function() {
		$("#chapters-wrapper").slideDown(600);
	},
	close: function() {
		$("#chapters-wrapper").slideUp(600);
	},
	toggle: function() {
		$("#chapters-wrapper").slideToggle(600);	
	}
};
side = {
	open: function() {
		$(".ui.sidebar").sidebar("setting","transition","scale down").sidebar("show");
	},
	close: function() {
		$(".ui.sidebar").sidebar("setting","transition","scale down").sidebar("hide");
	}
};


//For addStory MODAL TEMPLATE
newStory = {
	init: function(){
		//Initial newStory
		// .name: string of name of the story
		// .location: {lat: Number, lng: Number} of starting location
		// .start: Date object
		console.log("newStory init");
		Session.setDefault("newStory.name", "");
		Session.setDefault("newStory.location", {lat: 0, lng: 0});
		Session.setDefault("newStory.start", new Date());

	}
}