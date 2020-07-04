// Load in geojson data
var geoData = "static/data/map.geojson";
var geojson;
var legend;
var map = document.getElementById("map");
var gdpButton = document.getElementById("gdpButton");
var popButton = document.getElementById("popButton");
var tradeButton = document.getElementById("tradeButton");
var gdpCapButton = document.getElementById("gdpCapButton");

var myMap = L.map("map", {
  center: [27.5, 17.0],
  zoom: 3
});

gdpButton.onclick = function() {
  map.remove();
  var div = document.createElement("div");
  div.innerHTML = 'Y HALO THAR';
  document.getElementById("menu")[0].appendChild(div)

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
    valueProperty: "gdp",
    // Set color scale
    scale: ["#e6ebc5", "#003700"],
    // Number of breaks in step range
    steps: 10,
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
        + "<br>Population: " + feature.properties.population
        + "<br>Gross Domestic Product: $" + feature.properties.gdp
        + "<br>Trade Balance: " + feature.properties.trade_balance
        + "<br>Import Most From: " + feature.properties.top_importer + " ($" + feature.properties.import_value + ")"
        + "<br>Export Most To: " + feature.properties.top_exporter + " ($" + feature.properties.export_value + ")");
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
    var legendInfo = "<h1>GDP in Millions (USD)</h1>" +
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
};

popButton.onclick = function() {
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
    valueProperty: "population",
    // Set color scale
    scale: ["#e6ebc5", "#be0000"],
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
        + "<br>Population: " + feature.properties.population
        + "<br>Gross Domestic Product: $" + feature.properties.gdp
        + "<br>Trade Balance: " + feature.properties.trade_balance
        + "<br>Import Most From: " + feature.properties.top_importer + " ($" + feature.properties.import_value + ")"
        + "<br>Export Most To: " + feature.properties.top_exporter + " ($" + feature.properties.export_value + ")");
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
    var legendInfo = "<h1>Population</h1>" +
      "<div class=\"labels\">" +
        "<div class=\"min\">" + limits[0] + "</div>" +
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
};

tradeButton.onclick = function() {
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
        + "<br>Population: " + feature.properties.population
        + "<br>Gross Domestic Product: $" + feature.properties.gdp
        + "<br>Trade Balance: " + feature.properties.trade_balance
        + "<br>Import Most From: " + feature.properties.top_importer + " ($" + feature.properties.import_value + ")"
        + "<br>Export Most To: " + feature.properties.top_exporter + " ($" + feature.properties.export_value + ")");
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
        "<div class=\"min\">" + limits[0] + "</div>" +
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
};

gdpCapButton.onclick = function() {
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
    valueProperty: "gdp_pop",
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
        + "<br>Population: " + feature.properties.population
        + "<br>Gross Domestic Product: $" + feature.properties.gdp
        + "<br>Trade Balance: " + feature.properties.trade_balance
        + "<br>Import Most From: " + feature.properties.top_importer + " ($" + feature.properties.import_value + ")"
        + "<br>Export Most To: " + feature.properties.top_exporter + " ($" + feature.properties.export_value + ")");
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
    var legendInfo = "<h1>GDP per Capita (USD)</h1>" +
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
};
