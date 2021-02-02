// //------------------------------------------------------------------------
// // This was my first attempt. I tried, but couldn't get this code to produce a map.
// // So I'm moving onto a new attempt. Keeping this file for records.
// //------------------------------------------------------------------------
// // Store our API endpoint inside queryUrl (data lives at this URL)
// // This step tells JavaScript to go to USGS website and pull data
// var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";

// // Perform a GET request to the query URL
// d3.json(queryUrl).then(function(data) {
//     // The data.features object is in the GeoJSON standard
//     console.log(data.features);
//     // pull in features from the 'geometry' key
//     var earthquakes = L.geoJSON(data.features);
//     // create the map 
//     var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//         attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//         tileSize: 512,
//         maxZoom: 18,
//         zoomOffset: -1,
//         id: "mapbox/streets-v11",
//         accessToken: API_KEY
//     });
//     // var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     // attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     // maxZoom: 18,
//     // id: "dark-v10",
//     // accessToken: API_KEY
// //   });

//   // Define a baseMaps object to hold our base layers
//   var baseMaps = {
//     "Street Map": streetmap
//     // "Dark Map": darkmap
//   };

//   // Create overlay object to hold our overlay layer
//   var overlayMaps = {
//     Earthquakes: earthquakes
//   };

//   // Create our map, giving it the streetmap and earthquakes layers to display on load
//   var myMap = L.map("map", {
//     center: [
//       37.09, -95.71
//     ],
//     zoom: 5,
//     layers: [streetmap, earthquakes]
//   });

//   // Create a layer control
//   // Pass in our baseMaps and overlayMaps
//   // Add the layer control to the map
//   L.control.layers(baseMaps, overlayMaps, {
//     collapsed: false
//   }).addTo(myMap);

    

// })

// //  RESOURCE: MODULE 17 LEAFLET > DAY 1 > EXERCISE 10  >>>  
// // https://oregon.bootcampcontent.com/Oregon_Coding_Bootcamp/uofo-por-data-pt-09-2020-u-c/-/tree/master/17-Mapping-Web/1/Activities/10-Ins_Geo-Json