// Store our API endpoint inside queryUrl (data lives at this URL)
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl).then(function(data) {
    // The data.features object is in the GeoJSON standard
    console.log(data.features);
});
