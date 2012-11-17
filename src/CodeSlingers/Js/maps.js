$(function () {
	var _googleMap;
	var _mapIcon = window.rootUrl + "images/map-marker.png"; ;

	var _initializeGoogleMap = function () {
		var latlng = new google.maps.LatLng(44.960195, -93.164663);
		var myOptions = {
			zoom: 11,
			center: latlng,
			disableDefaultUI: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		_googleMap = new google.maps.Map($("#map-canvas")[0], myOptions);
		_loadMapMarkers();
	};

	var _loadMapMarkers = function () {
		var address1 = "1000 Nicollet Mall, <br/>Minneapolis, MN 55403";
		_createMapMarker("Good Times Sushi", 44.973965, -93.274825, address1);

		var address2 = "408 7th St W, <br/> St Paul, MN 55116";
		_createMapMarker("Good Times Sushi", 44.938825, -93.110039, address2);
	};

	var _createMapMarker = function (title, lat, long, address) {
		var location = new google.maps.LatLng(lat, long);
		var marker = new google.maps.Marker(
            {
            	position: location,
            	title: title,
            	icon: _mapIcon
            });

		marker.setMap(_googleMap);
		_createMarkerInfoWindow(marker, address);
	};

	var _createMarkerInfoWindow = function (marker, address) {
		var markup = "<div class='map-info-window'>" +
						"<div class='title'>Good Times Sushi</div>" +
						"<div class='content'>" + address + "</div>" +
					 "</div>";

		var infowindow = new google.maps.InfoWindow({
			content: markup,
			maxWidth: 800
		});

		google.maps.event.addListener(marker, 'click', function () {
			infowindow.open(_googleMap, marker);
		});

	};

	_initializeGoogleMap();
});
