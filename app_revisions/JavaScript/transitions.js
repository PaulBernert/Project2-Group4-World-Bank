// set the dimensions and margins of the graph
var width = 450
    height = 450
    margin = 40

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin

// append the svg object to the div called 'chart'
var svg = d3.select(".chart")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var data1 = {}
    var data2 = {}
    var currentKey;
    var currentVal;

// create 2 data_set
d3.csv("data/tradeData.csv").then(function(exportData){
    exportData.forEach(function(data){
        //console.log(data);
        //console.log(data.categories);
        //console.log(data.year_2018);
        data.year_2018 = +data.year_2018;
        data.year_2008 = +data.year_2008;
        var keys = data.categories
        var y_2018 = data.year_2018
        var y_2008 = data.year_2008

        for (var i = 0; i < keys.length; i++) {
            currentKey = keys;
            currentVal = y_2018;
            data1[currentKey] = currentVal;
        }
        for (var j = 0; j < keys.length; j++){
            currentKey = keys;
            currentVal = y_2008;
            data2[currentKey] = currentVal;
        }

    })
}) 

    
// set the color scale
var color = d3.scaleOrdinal()
  .domain(["Animal","Chemicals","Food Products","Footwear","Fuels","Hides and Skins","Mach and Elec","Metals","Minerals","Miscellaneous","Plastic or Rubber","Stone and Glass","Textiles and Clothing","Transportation","Vegetable"])
  //.domain(data.categories)
  .range(d3.schemeDark2);


// A function that create / update the plot for a given variable:
function update(data) {

  // Compute the position of each group on the pie:
  var pie = d3.pie()
    .value(function(d) {return d.value; })
    .sort(function(a, b) { console.log(a) ; return d3.ascending(a.key, b.key);} ) // This make sure that group order remains the same in the pie chart
  var data_ready = pie(d3.entries(data))

  // map to data
  var u = svg.selectAll("path")
    .data(data_ready)

  var arcGenerator = d3.arc()
    .innerRadius(radius * .5)
    .outerRadius(radius * .8)

  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  u
    .enter()
    .append('path')
    .merge(u)
    .transition()
    .duration(1000)
    .attr('d', d3.arc()
      .innerRadius(radius * .5)
      .outerRadius(radius * .8)
    )
    .attr('fill', function(d){ return(color(d.data.key)) })
    .attr("stroke", "white")
    .style("stroke-width", "2px")
    .style("opacity", 1)

  u
    .enter()
    .append("text")
    .text(function(d){ return d.data.key})
    .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
    .style("text-anchor", "middle")
    .style("font-size", 17)
  // remove the group that is not present anymore
  u
    .exit()
    .remove()
}


// Initialize the plot with the first dataset
update(data2);
