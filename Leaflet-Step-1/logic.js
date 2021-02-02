// API
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";

// Creating map object
var myMap = L.map("mapid", {
    center: [37.0902, -95.7129], //USA coordinates
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

// Grab the data with d3
d3.json(queryUrl).then(function (data) {
    console.log(data);
    console.log(data.lat);
    console.log(Object.keys(data.lat).length);
    var index = 0;
    var plotdata = [];
    Object.keys(data.lat).forEach(function () {
        var thisobject = {
            location: [data.lat[index], data.lng[index]],
            citystate: data.Location[index]
        }
        plotdata.push(thisobject)
        index = index + 1
    })
    console.log(plotdata)
    // Loop through the plotdata array and create one marker for each city, bind a popup containing its name and population add it to the map
    for (var i = 0; i < plotdata.length; i++) {
        var city = plotdata[i];
        L.marker(city.location)
            .bindPopup("<h1>" + city.citystate + "</h1>")
            .addTo(myMap);
    }

});

// [{location:[lat,lon]}]
// HINTS: Store this in MongoDB so you don't have to do some stuff