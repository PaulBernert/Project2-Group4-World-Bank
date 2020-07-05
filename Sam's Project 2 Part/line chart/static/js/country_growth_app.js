var gdpButton = document.getElementById("gdpButton");
gdpButton.onclick = function() {
  location.assign('http://127.0.0.1:5000/gdp_chart')
}

var importsButton = document.getElementById("importsButton");
importsButton.onclick = function() {
  location.assign('http://127.0.0.1:5000/imports_chart')
}

var exportsButton = document.getElementById("exportsButton");
exportsButton.onclick = function() {
  location.assign('http://127.0.0.1:5000/exports_chart')
}

var growthButton = document.getElementById("growthButton");
growthButton.onclick = function() {
  location.assign('http://127.0.0.1:5000/country_growth_chart')
}

console.log(growth_data);

var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 100,
  bottom: 60,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

var parseTime = d3.timeParse("%Y");

  growth_data.forEach(function(data) {
    data.year = parseTime(data.year);
    data.china = +data.china;
    data.united_states = +data.united_states;

  console.log(data.china);
  console.log(data.united_states);
});

  var xTimeScale = d3.scaleTime()
    .domain(d3.extent(growth_data, d => d.year))
    .range([0, width]);

  var yLinearScale = d3.scaleLinear().range([height, -11]);

  var chinaMax = d3.max(growth_data, d => d.china);

  var unitedstatesMax = d3.max(growth_data, d => d.united_states);

  var yMax;
  if (chinaMax > unitedstatesMax) {
    yMax = chinaMax;
  }
  else {
    yMax = unitedstatesMax;
  }

  yLinearScale.domain([-11, yMax]);

  var bottomAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat("%Y"));
  var leftAxis = d3.axisLeft(yLinearScale);

  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  chartGroup.append("g").call(leftAxis);

  var line1 = d3.line()
    .x(d => xTimeScale(d.year))
    .y(d => yLinearScale(d.china));

  var line2 = d3.line()
    .x(d => xTimeScale(d.year))
    .y(d => yLinearScale(d.united_states));

  chartGroup
    .append("path")
    .attr("d", line1(growth_data))
    .classed("line green", true);

  chartGroup
    .data([growth_data])
    .append("path")
    .attr("d", line2)
    .classed("line blue", true);

  chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 40)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .attr("class", "axisText")
      .text("Growth %");

    chartGroup.append("text")
      .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
      .attr("class", "axisText")
      .text("Year");

      // var legend_keys = ["Austin", "New York", "San Francisco"]

      // var lineLegend = svg.selectAll(".lineLegend").data(legend_keys)
      //     .enter().append("g")
      //     .attr("class","lineLegend")
      //     .attr("transform", function (d,i) {
      //             return "translate(" + width + "," + (i*20)+")";
      //         });
      
      // lineLegend.append("text").text(function (d) {return d;})
      //     .attr("transform", "translate(15,9)"); //align texts with boxes
      
      // lineLegend.append("rect")
      //     .attr("fill", function (d, i) {return color_scale(d); })
      //     // .attr("width", 10).attr("height", 10);