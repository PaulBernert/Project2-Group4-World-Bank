var gdpButton = document.getElementById("gdpButton");
gdpButton.onclick = function() {
  location.assign('https://world-bank-project-2.herokuapp.com/gdp_chart')
}

var importsButton = document.getElementById("importsButton");
importsButton.onclick = function() {
  location.assign('https://world-bank-project-2.herokuapp.com/imports_chart')
}

var exportsButton = document.getElementById("exportsButton");
exportsButton.onclick = function() {
  location.assign('https://world-bank-project-2.herokuapp.com/exports_chart')
}

var growthButton = document.getElementById("growthButton");
growthButton.onclick = function() {
  location.assign('https://world-bank-project-2.herokuapp.com/country_growth_chart')
}

console.log(exports_data);

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

  exports_data.forEach(function(data) {
    data.year = parseTime(data.year);
    data.canada = +data.canada;
    data.china = +data.china;
    data.france = +data.france;
    data.germany = +data.germany;
    data.italy = +data.italy;
    data.japan = +data.japan;
    data.united_kingdom = +data.united_kingdom;
    data.united_states = +data.united_states;

  console.log(data.canada);
  console.log(data.china);
  console.log(data.france);
  console.log(data.germany);
  console.log(data.italy);
  console.log(data.japan);
  console.log(data.united_kingdom);
  console.log(data.united_states);
});

  var xTimeScale = d3.scaleTime()
    .domain(d3.extent(exports_data, d => d.year))
    .range([0, width]);

  var yLinearScale = d3.scaleLinear().range([height, 0]);

  var chinaMax = d3.max(exports_data, d => d.china);

  var unitedstatesMax = d3.max(exports_data, d => d.united_states);

  var yMax;
  if (chinaMax > unitedstatesMax) {
    yMax = chinaMax;
  }
  else {
    yMax = unitedstatesMax;
  }

  yLinearScale.domain([0, yMax]);

  var bottomAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat("%Y"));
  var leftAxis = d3.axisLeft(yLinearScale);

  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  chartGroup.append("g").call(leftAxis);

  var line1 = d3.line()
    .x(d => xTimeScale(d.year))
    .y(d => yLinearScale(d.canada));

  var line2 = d3.line()
    .x(d => xTimeScale(d.year))
    .y(d => yLinearScale(d.china));

  var line3 = d3.line()
    .x(d => xTimeScale(d.year))
    .y(d => yLinearScale(d.france));

  var line4 = d3.line()
    .x(d => xTimeScale(d.year))
    .y(d => yLinearScale(d.germany));

  var line5 = d3.line()
    .x(d => xTimeScale(d.year))
    .y(d => yLinearScale(d.italy));

  var line6 = d3.line()
    .x(d => xTimeScale(d.year))
    .y(d => yLinearScale(d.japan));

  var line7 = d3.line()
    .x(d => xTimeScale(d.year))
    .y(d => yLinearScale(d.united_kingdom));

  var line8 = d3.line()
    .x(d => xTimeScale(d.year))
    .y(d => yLinearScale(d.united_states));

  chartGroup
    .append("path")
    .attr("d", line1(exports_data))
    .classed("line red", true);

  chartGroup
    .data([exports_data])
    .append("path")
    .attr("d", line2)
    .classed("line green", true);

   chartGroup
    .data([exports_data])
    .append("path")
    .attr("d", line3)
    .classed("line navyblue", true);

    chartGroup
    .append("path")
    .attr("d", line4(exports_data))
    .classed("line gold", true);

  chartGroup
    .data([exports_data])
    .append("path")
    .attr("d", line5)
    .classed("line gray", true);

   chartGroup
    .data([exports_data])
    .append("path")
    .attr("d", line6)
    .classed("line burlywood", true);

    chartGroup
    .append("path")
    .attr("d", line7(exports_data))
    .classed("line darkred", true);

    chartGroup
    .data([exports_data])
    .append("path")
    .attr("d", line8)
    .classed("line blue", true);

    chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left + 20)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .attr("class", "axisText")
    .text("Total Exports (in US$ mil)");

  chartGroup.append("text")
    .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
    .attr("class", "axisText")
    .text("Year");

    var legend = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    .attr("class", "legend")
    .attr("x", 10)
    .attr("y", 25)
    .attr("height", 100)
    .attr("width", 100);

    legend.selectAll('g').data([["Canada", "red"],["China","green"], ["France", "navyblue"], ["Germany", "gold"], ["Italy", "gray"], ["Japan", "burlywood"], ["United Kingdom", "darkred"], ["United States", "blue"]])
      .enter()
      .append('g')
      .each(function(d, i) {
        var g = d3.select(this);
        g.append("rect")
          .attr("x", 10)
          .attr("y", i*25)
          .attr("width", 10)
          .attr("height", 10)
          // .style("fill", color_hash[String(i)][1]);
          .style("fill", d[1]);
        g.append("text")
          .attr("x", 25)
          .attr("y", i * 25 + 8)
          .attr("height",30)
          .attr("width",100)
          // .style("fill", color_hash[String(i)][1])
          .text(d[0]);
      });
