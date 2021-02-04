// API
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";

// Create map object
var myMap = L.map("mapid", {
    center: [37.0902, -95.7129], //USA coordinates, middle of Kansas
    zoom: 5
});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap);

// Color the map layer based on the magnitude of the earthquake
function quakeMagColor(mag) {
    if (mag > 5.0) {
        return "red";
    }
    if (mag > 4.0) {
        return "orange";
    }
    if (mag > 3.0) {
        return "yellow";
    }
    if (mag > 2.0) {
        return "black";
    }
    if (mag > 0) {
        return "blue";
    }
}

// Grab the GeoJSON data with d3
d3.json(queryUrl).then(function (data) {
    // Create geoJSON layer with the data we retrieved from d3
    L.geoJson(data, {
        // Add a circle marker to the layer
        pointToLayer: function(feature,latlng) {
            return L.circleMarker(latlng)
        },
        style: function(feature) {
            return {
                color: "white",
                // Call the quakeMagColor function to color our geography based on earthquake magnitude
                fillColor: quakeMagColor(feature.properties.mag),
                fillOpacity: .8,
                weight: 1.6,
                radius: feature.properties.mag*4
            };
        },
    // call each feature
    onEachFeature: function(feature, layer) {
        // Add pop-ups 
        layer.bindPopup("<h1>" + feature.properties.place + "</h1> <hr> <h2> Magnitude: " + feature.properties.mag + "</h2>");
    }
}).addTo(myMap);
});
// Add legend explaining the color of the bubbles on the map
var legend = L.control({position: 'topright'});
legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0,2,3,4,5],
        labels = [];
        colors = ["blue", "black", "yellow", "orange", "red"]
legend.addTo(myMap);


};





// [{location:[lat,lon]}]
// HINTS: Store this in MongoDB so you don't have to do some stuff