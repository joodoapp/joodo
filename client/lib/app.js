Handlebars.registerHelper("context", function(){
	return Session.get("context");
});

Handlebars.registerHelper("newStoryName", function(){
	return Session.get("newStory.name");
});
Handlebars.registerHelper("newStoryLocation", function(){
	return Session.get("newStory.location");
});
Handlebars.registerHelper("newStoryStart", function(){
	return Session.get("newStory.start");
});