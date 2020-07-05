var geoData = "static/data/worldMap/map.geojson";
var geojson;
var legend;
var map = document.getElementById("map");

var gdpButton = document.getElementById("gdpButton");
gdpButton.onclick = function() {
  location.assign('http://127.0.0.1:5000/map-gdp')
}

var popButton = document.getElementById("popButton");
popButton.onclick = function() {
  location.assign('http://127.0.0.1:5000/map-population')
}

var tradeButton = document.getElementById("tradeButton");
tradeButton.onclick = function() {
  location.assign('http://127.0.0.1:5000/map-tradeBalance')
}

var gdpCapButton = document.getElementById("gdpCapButton");
gdpCapButton.onclick = function() {
  location.assign('http://127.0.0.1:5000/map-gdpPerCapita')
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

// Creating map object
var myMap = L.map("map", {
  center: [25.0, 7.5],
  zoom: 3
});

// Grab data with d3
d3.json(geoData, function(data) {

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Create a new choropleth layer
geojson = L.choropleth(data, {
  // Define what  property in the features to use
  valueProperty: "trade_balance",
  // Set color scale
  scale: ["#be0000", "#003700"],
  // Number of breaks in step range
  steps: 15,
  // q for quartile, e for equidistant, k for k-means
  mode: "q",
  style: {
    // Border color
    color: "#fff",
    weight: 1,
    fillOpacity: 0.8
  },

  // Binding a pop-up to each layer
  onEachFeature: function(feature, layer) {
    layer.bindPopup(feature.properties.ADMIN
      + "<br>--------------------------------------------------"
      + "<br><b>Population:</b> " + feature.properties.population
      + "<br><b>Gross Domestic Product:</b> $" + feature.properties.gdp
      + "<br><b>GDP per Capita:</b> $" + feature.properties.gdp_pop
      + "<br>--------------------------------------------------"
      + "<br><b>Trade Balance:</b> " + feature.properties.trade_balance
      + "<br><b>Import Most From:</b> " + feature.properties.top_importer + " ($" + feature.properties.import_value + ")"
      + "<br><b>Export Most To:</b> " + feature.properties.top_exporter + " ($" + feature.properties.export_value + ")")
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
    });
  }
}).addTo(myMap);

// Set up the legend
var legend = L.control({ position: "bottomright" });
legend.onAdd = function() {
  var div = L.DomUtil.create("div", "info legend");
  var limits = geojson.options.limits;
  var colors = geojson.options.colors;
  var labels = [];

  // Add min & max
  var legendInfo = "<h1>Trade Balance in Millions (USD)</h1>" +
    "<div class=\"labels\">" +
      "<div class=\"min\">" + limits[1] + "</div>" +
      "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
    "</div>";

  div.innerHTML = legendInfo;

  limits.forEach(function(limit, index) {
    labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
  });

  div.innerHTML += "<ul>" + labels.join("") + "</ul>";
  return div;
};

// Adding legend to the map
legend.addTo(myMap);
});
