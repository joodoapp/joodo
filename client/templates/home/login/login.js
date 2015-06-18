Template.login.rendered = function(){
	console.log("login rendered");
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