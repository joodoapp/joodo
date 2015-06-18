Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});

Accounts.onLogin(function(){
	console.log("onLogin", Meteor.user());
})

joodo = angular.module("joodo", ["angular-meteor", "ui.router"]);

function onReady() {
	angular.bootstrap(document, ["joodo"]);
}

// function map(){
// 	map = L.map("map-canvas", {
// 	minZoom: 2,
// 	maxZoom: 10,
// 	zoomControl: false
// });
// };
if (Meteor.isCordova) {
	angular.element(document).on("deviceready", onReady)
} else {
	angular.element(document).ready(onReady);
}