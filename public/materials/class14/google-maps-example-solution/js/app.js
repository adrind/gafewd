var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 37.7749, lng: -122.4194},
	  zoom: 8
	});

	// Store information about locations in an Array
	var locations = [
	  {
	    lat: 37.7552,
	    lng: -122.4528,
	    title: 'Sutro Tower',
	  },
	  {
	    lat: 37.7983,
	    lng: -122.3778,
	    title: 'Bay Bridge',
	  },
	  {
	    lat: 37.8199,
	    lng: -122.4783,
	    title: 'Golden Gate Bridge',
	  },
	];


	// For each location in the Array of locations, call the processLocation function
	locations.forEach(processLocation);

	function processLocation (location) {
	  // Create a new marker for each location
	  var marker = new google.maps.Marker({
	    position: {
	      lat: location.lat,
	      lng: location.lng,
	    },
	    title: location.title,
	    map: map,
	  });
	}
}


