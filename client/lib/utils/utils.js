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
		nav.close();
		side.open();
	}
};
nav = {
	open: function() {
		$("#nav-wrapper").slideDown(500);
	},
	close: function() {
		console.log($("#nav-wrapper"));
		$("#nav-wrapper").slideUp(500);
	},
	toggle: function() {
		$("#nav-wrapper").slideToggle(500);	
	}
}
side = {
	open: function() {
		$(".ui.sidebar").sidebar("setting","transition","scale down").sidebar("show");
	},
	close: function() {
		$(".ui.sidebar").sidebar("setting","transition","scale down").sidebar("hide");
	}
}
