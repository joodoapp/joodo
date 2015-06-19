Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});


// login TEMPLATE
//This is the entire modal
Template.login.rendered = function(){
	//Force login each time
	// Meteor.logout();	
	//Open login modal
	// login.open();
};
Template.login.helpers({
});
Template.login.events({
});

// loggedIn TEMPLATE
//This is the content that shows when the user signs in 
Template.loggedIn.events({
	//Enter joodo
	"click .login-enter": function(e) {
		login.close();
	}
});