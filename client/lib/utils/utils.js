console.log("utils");
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