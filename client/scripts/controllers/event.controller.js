angular
  .module('TedXOSU')
  .controller('EventCtrl', EventCtrl);

function EventCtrl($scope, $ionicLoading, $compile){
	
}

function showGoogleMaps() {
	// The latitude and longitude of your business / place
	var position = [40.000639,-83.009348];

  var latLng = new google.maps.LatLng(position[0], position[1]);

  var mapOptions = {
    zoom: 16, // initialize zoom level - the max value is 21
    streetViewControl: false, // hide the yellow Street View pegman
    scaleControl: true, // allow users to zoom the Google Map
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: latLng
  };

  map = new google.maps.Map(document.getElementById('googlemaps'),
      mapOptions);
  console.log(map);

  // Show the default red marker at the location
  marker = new google.maps.Marker({
    position: latLng,
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP
  });
}