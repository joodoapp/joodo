angular.module("joodo").run(["$rootScope", "$state",
	function($rootScope, $state) {
		$rootScope.$on("$stateChangeError",
			function(event, toState, toParams, fromState, fromParams, error) {
				if (error === "AUTH_REQUIRED") {
					$state.go("home")
				}
			}
		)
	}
]);

angular.module("joodo").config(
	["$urlRouterProvider","$stateProvider","$locationProvider",
	function($urlRouterProvider, $stateProvider, $locationProvider) {
		$locationProvider.html5Mode(true);

		$stateProvider
			.state("home", {
				url: "/home",
				templateUrl: "client/views/home/home.ng.html",
				controller: "homeCtrl"
			})
	}
])