Stories = new Mongo.Collection("stories");

Stories.allow({
	insert: function(userID, story) {
		//Only users get insert permissions
		return userID;
	},
	update: function(userID, story, fields, modifier) {
		return userID;
	},
	remove: function(userID, story) {
		return userID;
	}
});