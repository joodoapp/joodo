joodo.factory("Map",
	function() {
		function Map(locations) {
			this.locations = locations;
			// map = L.map("map-canvas");
			// var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
			// var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
			// var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});

			// map.addLayer(osm);
		};

		Map.prototype = {
			init: function() {




				// map.addLayer(osm);
				

			}
		}


			// L.control.zoom({
			// 	position: "topright"
			// }).addTo(map);

			// var LeafIcon = L.Icon.extend({
			// 	options: {
			//         shadowUrl: 'leaflet/leaf-shadow.png',
			//         iconSize:     [38, 95],
			//         shadowSize:   [50, 64],
			//         iconAnchor:   [22, 94],
			//         shadowAnchor: [4, 62],
			//         popupAnchor:  [-3, -76]
			//     }
			// });
			// // var greenIcon = new LeafIcon({iconUrl: "leaflet/leaf-green.png"});

			// // L.marker([43.4667, -80.516],{icon: greenIcon}).addTo(this.map)
			// //     .bindPopup('Custom leaf icon')
			// //     .openPopup();

			// L.easyButton("fa-share-alt fa-flip-horizontal", 
			//               function () {$(".ui.sidebar").sidebar("setting","transition","scale down").sidebar("toggle")},
			//              "Timeline",
			//              map
			//             )
		return Map
	}
)

Meteor.startup(function(){
	console.log("startup");
				map = L.map("map-canvas");
				console.log(map);
			var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
			var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
			var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});

			map.addLayer(osm);
})

joodo.controller("mapCtrl", ["$scope", function($scope) {
	console.log("mapCtrl");
	// console.log(L);
	// $scope.map = L.map("map-canvas");

	// // OpenStreetMap tile layer
	// var osmUrl = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
	// var osmAttrib = "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors";
	// L.tileLayer(osmUrl, {
	//     attribution: osmAttrib
	// }).addTo($scope.map)
	// $scope.map.addLayer(osm);
	// console.log(osm);
	// angular.extend($scope, {
	// 	center: {
	// 		lat: 90,
	// 		lng: 100,
	// 		zoom: 8
	// 	},
	// 	defaults: {
	// 		scrollWheelZoom: false
	// 	}
	// });
}]);