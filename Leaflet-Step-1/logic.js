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

// Color the mag layer based on the magnitude of the earthquake
function quakemMagColor(mag) {
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
        return "236AB9";
    }
    if (mag > 0) {
        return "blue";
    }
}

// Grab the data with d3
d3.json(queryUrl).then(function (data) {
    // The data.features object is in the GeoJSON standard
    console.log(data.features);
    // pull in features from the 'geometry' key
    var earthquakes = L.geoJSON(data.features);

});



// [{location:[lat,lon]}]
// HINTS: Store this in MongoDB so you don't have to do some stuff