Template.login.rendered = function(){
	console.log("login rendered");
	$(".ui.modal")
		.modal({
			closable: false,
			transition: "vertical flip",
			onApprove: function() {
				//Only leave login modal if they're signed in
				if (!Meteor.user()) {return false}
			}
		})
		.modal("show");
}