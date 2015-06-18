// Template.login.rendered = function(){
// 	console.log("login rendered");
// 	//Force login each time
// 	Meteor.logout();
// 	//Open login modal
// 	$(".ui.modal")
// 		.modal({
// 			closable: false,
// 			transition: "vertical flip",
// 			onApprove: function() {
// 				//Only leave login modal if they're signed in
// 				if (!Meteor.user()) {return false}
// 			}
// 		})
// 		.modal("show");
// }

joodo.controller("homeCtrl",
	["$scope", "$meteor", "Map",
	function($scope, $meteor, Map) {
		console.log("homeCtrl");
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
		console.log("homeCtrl");
		// console.log(Map);
		new Map();
		// M.init();
	}

])