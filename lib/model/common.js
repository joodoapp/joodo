//COLLECTIONS
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
Chapters = new Mongo.Collection("chapters");
Chapters.allow({
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

//SCHEMA
ChapterSchema = new SimpleSchema({
	story_id: {
		type: String,
		label: "story"
	},
	start: {
		type: Date,
		label: "start"
	},
	end: {
		type: Date,
		label: "end"
	},
	//{lat: Number, lng: Number}
	location: {
		type: Object,
		label: "location",
		blackbox: true
	}
});
StorySchema = new SimpleSchema({
	teller: {
		type: String,
		label: "teller"
	},
	name: {
		type: String,
		label: "name"
	},
	start: {
		type: Date,
		label: "start"
	},
	end: {
		type: Date,
		label: "end"
	},
	chapters: {
		type: [Object],
		label: "chapters",
		blackbox:true
	}
});

//Attach schemas
Chapters.attachSchema(ChapterSchema);
Stories.attachSchema(StorySchema);
