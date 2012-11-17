$(function () {
	var _googleMap;
	var _mapIcon = window.rootUrl + "images/map-marker.png"; ;

	var _initializeGoogleMap = function () {
		var latlng = new google.maps.LatLng(44.960195, -93.164663);
		var myOptions = {
			zoom: 11,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		_googleMap = new google.maps.Map($("#map-canvas")[0], myOptions);
		_loadMapMarkers();
	};

	var _loadMapMarkers = function () {
		_createMapMarker("title me1?", 44.973965, -93.274825);
		_createMapMarker("title me2?", 44.938825, -93.110039);
	};

	var _createMapMarker = function (title, lat, long) {
		var location = new google.maps.LatLng(lat, long);
		var marker = new google.maps.Marker(
            {
            	position: location,
            	title: title,
            	icon: _mapIcon
            });

		marker.setMap(_googleMap);
	};

	_initializeGoogleMap();
});
