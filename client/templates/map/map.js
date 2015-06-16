Meteor.startup(function(){
	var canvas = $("#map-canvas");
	canvas.height(canvas.width()/2);

	//Map
	var map = L.map('map-canvas', {
		zoomControl: false
	}).setView([51.505, -0.09], 13);

	//OpenStreetMap tile layer
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	//Zoom control
	L.control.zoom({
		position: "topright"
	}).addTo(map)

	//Marker icons
	var LeafIcon = L.Icon.extend({
		options: {
	        shadowUrl: 'leaflet/leaf-shadow.png',
	        iconSize:     [38, 95],
	        shadowSize:   [50, 64],
	        iconAnchor:   [22, 94],
	        shadowAnchor: [4, 62],
	        popupAnchor:  [-3, -76]
	    }
	})
	var greenIcon = new LeafIcon({iconUrl: "leaflet/leaf-green.png"});
	console.log(greenIcon);
	// add a marker in the given location, attach some popup content to it and open the popup
	// L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map)
	L.marker([51.5, -0.09],{icon: greenIcon}).addTo(map)
	    .bindPopup('Custom leaf icon')
	    .openPopup();

	L.easyButton("fa-share-alt fa-flip-horizontal", 
	              function () {$(".ui.sidebar").sidebar("toggle")},
	             "Timeline",
	             map
	            )
})