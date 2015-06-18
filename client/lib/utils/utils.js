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
		nav.close();
		side.open();
	},
	close : function() {
		$(".ui.modal.login-modal").modal("hide");
		nav.open();
		side.close();
	}
};
nav = {
	open: function() {
		$("#nav-wrapper").show();
	},
	close: function() {
		console.log($("#nav-wrapper"));
		$("#nav-wrapper").hide(400);
	},
	toggle: function() {
		$("#nav-wrapper").toggle(400);	
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
