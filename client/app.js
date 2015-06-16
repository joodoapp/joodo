Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});

Accounts.onLogin(function(){
	console.log("onLogin", Meteor.user());
})