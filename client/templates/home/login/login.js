Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});
Accounts.onLogin(function(){
	console.log("onLogin", Meteor.user());
});

Template.login.rendered = function(){
	//Force login each time
	// Meteor.logout();	
	//Open login modal
	login.open();
};

Template.login.helpers({
	enter: function() {
		console.log("@enter");
	}
});


Template.login.events({
});

Template.loggedIn.rendered = function(){
	$(".login-enter").click(function(e){
		//Close login modal
		login.close();
	});

}