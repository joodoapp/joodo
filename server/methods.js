Accounts.onCreateUser(function(o,u){
	console.log("u",u);
	console.log("o",o);
	u.profile.stories = [];
	console.log("u",u);
	return u;
});

Meteor.startup(function() {
	if (Stories.find().count() === 0 && Chapters.find().count() === 0) {
		console.log("LOADING MOCKUP DATA");

	}
});


//METHODS
Meteor.methods({
	//Accepts story object
	addStory: function(s) {
		Stories.insert(s, function(e,r){
			console.log("addStory: ",e,r);
		})
	}
})