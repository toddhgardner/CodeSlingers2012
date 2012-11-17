$(function () {
	var _googleMap;
	var _mapIcon = "";

	var _initializeGoogleMap = function () {
		var latlng = new google.maps.LatLng(44.960195, -93.164663);
		var myOptions = {
			zoom: 11,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		_googleMap = new google.maps.Map($("#map-canvas")[0], myOptions);
		//_loadSchoolMarkers();
	};

	_initializeGoogleMap();
});
