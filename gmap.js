var map;
//Initailize map first with nothing
// after form submission find lat/lon
//add coordinates to the map
// draw polyline
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.09024, lng: -95.712891},
    zoom: 4,
    scrollwheel: false
  });

	var form = document.getElementById('searchform');
	//add an event listener for form submission
	google.maps.event.addDomListener(searchform, 'submit', function(frm) {
		// evt.preventDefault();
		// get lat/long for each location, change string to number
		var lat1 = Number(document.getElementById('airport1-lat').value);
		var lon1 = Number(document.getElementById('airport1-lon').value);
		var lat2 = Number(document.getElementById('airport2-lat').value);
		var lon2 = Number(document.getElementById('airport2-lon').value);
	// Initailize map again
	map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.09024, lng: -95.712891},
    zoom: 4,
    scrollwheel: false
  });
	// set the lat/long for each point
	var flightPlanCoordinates = [
    {lat: lat1, lng: lon1},
    {lat: lat2, lng: lon2}
  ];

  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);
  });
} 
