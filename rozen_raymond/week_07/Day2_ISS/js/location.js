var map;


function initMap() {
    var styledMapType = new google.maps.StyledMapType(
        [{
            "elementType": "geometry",
            "stylers": [{
                "color": "#242f3e"
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#746855"
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#242f3e"
            }]
        }, {
            "featureType": "administrative.land_parcel",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#d59563"
            }]
        }, {
            "featureType": "administrative.neighborhood",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#d59563"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#263c3f"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#6b9a76"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "color": "#38414e"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#212a37"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9ca5b3"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#746855"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#1f2835"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#f3d19c"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#2f3948"
            }]
        }, {
            "featureType": "transit.station",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#d59563"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#17263c"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#515c6d"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#17263c"
            }]
        }], {
            name: 'Styled Map'
        });

    var uluru = {
        lat: -25.363,
        lng: 131.044
    };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: uluru,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map'
            ]
        }
    });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
}


var marker = function(a, b) {
    var image = "images/spaceship2.png";
    console.log("MAP", map);
    var myLatlng = new google.maps.LatLng(a, b);
    var mark = new google.maps.Marker({
        position: myLatlng,
        center: myLatlng,
        icon: image
    });
    map.setCenter(myLatlng);
    mark.setMap(map);
    console.log("LOCA");
};


var displayLocation = function(data) {
    var latitude = parseFloat(data.iss_position.latitude);

    var longitude = parseFloat(data.iss_position.longitude);


    // console.log(latitude);
    // console.log(longitude);
    //
    // var $p = $("<p></p>");
    // $p.text("Latitude: " + latitude + ", Longitude: " + longitude);
    //
    // $(".location .result").prepend($p);

    marker(latitude, longitude);

};


var getLocation = function() {
    $.ajax({
        url: "http://api.open-notify.org/iss-now.json",
        dataType: "JSONP"
    }).done(displayLocation);
};

$(document).ready(function() {
    window.setInterval(getLocation, 5000);

    $(".locationButton").on("click", function() {
        getLocation();
    });
});
