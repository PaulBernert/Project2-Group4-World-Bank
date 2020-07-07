// Create dataset with data variable loaded from Flask app.

function createDataSet(){

    // Get chart data selections from user
    var ctry = document.getElementById("selCountry");
    var yr = document.getElementById("selYear");
    var ind = document.getElementById("selIndicator");
    //var flw = document.getElementById("selFlow");

    console.log(ctry.value);
    console.log(yr.value);
    console.log(ind.value);

    // Use filter statement to filter available data according to user selections.
    var micro_chart_selection = data.filter(data => data.reporter_name === ctry.value && data.year === yr.value && data.indicator == ind.value)
    //var info_box = data.filter(data => data.reporter_name === ctry.value && data.year === yr.value && data.product_group == "  All Products")
    //var selection = data.filter(data => data.reporter_name === ctry.value && data.year === yr.value && data.trade_flow == flw.value)
    console.log(micro_chart_selection);

    // if (flw.value == "Export") {

    //     //var macro = selection.filter(selection => selection.indicator === "Macro Export (US$ Thousand)")
    //     var micro = selection.filter(selection => selection.indicator === "Micro Export (US$ Thousand)")

    //     }

    //   else {
    //     //var macro = selection.filter(selection => selection.indicator === "Macro Import (US$ Thousand)")
    //     var micro = selection.filter(selection => selection.indicator === "Micro Import (US$ Thousand)")

    //   }

    var table_data = [{
      Indicator: "Animal",
      Percent: micro_chart_selection[0].total_percent,
      Dollars: micro_chart_selection[0].total_dollars
    },
    {
      Indicator: "Chemicals",
      Percent: micro_chart_selection[1].total_percent,
      Dollars: micro_chart_selection[1].total_dollars
    },
    {
      Indicator: "Food Products",
      Percent: micro_chart_selection[2].total_percent,
      Dollars: micro_chart_selection[2].total_dollars
    },
    {
      Indicator: "Footwear",
      Percent: micro_chart_selection[3].total_percent,
      Dollars: micro_chart_selection[3].total_dollars
    },
    {
      Indicator: "Fuels",
      Percent: micro_chart_selection[4].total_percent,
      Dollars: micro_chart_selection[4].total_dollars
    },
    {
      Indicator: "Hides and Skins",
      Percent: micro_chart_selection[5].total_percent,
      Dollars: micro_chart_selection[5].total_dollars
    },
    {
      Indicator: "Mach and Elec",
      Percent: micro_chart_selection[6].total_percent,
      Dollars: micro_chart_selection[6].total_dollars
    },
    {
      Indicator: "Metals",
      Percent: micro_chart_selection[7].total_percent,
      Dollars: micro_chart_selection[7].total_dollars
    },
    {
      Indicator: "Minerals",
      Percent: micro_chart_selection[8].total_percent,
      Dollars: micro_chart_selection[8].total_dollars
    },
    {
      Indicator: "Miscellaneous",
      Percent: micro_chart_selection[9].total_percent,
      Dollars: micro_chart_selection[9].total_dollars
    },
    {
      Indicator: "Plastic or Rubber",
      Percent: micro_chart_selection[10].total_percent,
      Dollars: micro_chart_selection[10].total_dollars
    },
    {
      Indicator: "Stone and Glass",
      Percent: micro_chart_selection[11].total_percent,
      Dollars: micro_chart_selection[11].total_dollars
    },
    {
      Indicator: "Textiles and Clothing",
      Percent: micro_chart_selection[12].total_percent,
      Dollars: micro_chart_selection[12].total_dollars
    },
    {
      Indicator: "Transportation",
      Percent: micro_chart_selection[13].total_percent,
      Dollars: micro_chart_selection[13].total_dollars
    },
    {
      Indicator: "Vegetable",
      Percent: micro_chart_selection[14].total_percent,
      Dollars: micro_chart_selection[14].total_dollars
    },
    {
      Indicator: "Wood",
      Percent: micro_chart_selection[15].total_percent,
      Dollars: micro_chart_selection[15].total_dollars
    }
    ];

    d3.select("tbody")
      .selectAll("tr")
      .remove()

    d3.select("tbody")
      .selectAll("tr")
      .data(table_data)
      .enter()
      .append("tr")
      .html(function(d) {
        return `<td>${d.Indicator}</td><td>${d.Percent}</td><td>${d.Dollars}</td>`;
      });


    var result = {}
    var currentKey;
    var currentVal;
    //console.log(selection[0].reporter_name);

    micro_chart_selection.forEach(function(data){
        var keys = data.product_group
        var values = data.total_percent


        for (var i = 0; i < keys.length; i++) {
            currentKey = keys;
            currentVal = values;
            result[currentKey] = currentVal;
        }
    });

    console.log(result);


// Reset the graph
d3.select("svg").remove();

// set the dimensions and margins of the graph
var width = 750
    height = 500
    margin = 20
// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin

// append the svg object to the div called 'my_dataviz'
var svg = d3.select("#chart2")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


  // set the color scale
  var color = d3.scaleOrdinal()
    .domain(["Animal", "Chemicals", "Food Products", "Footware", "Fuels", "Hides and Skins", "Mach and Elec", "Metals", "Minerals", "Miscellaneous", "Plastic or Rubber", "Stone or Glass", "Textiles and Clothing", "Transnporation", "Vegetable", "Wood"])
    .range(d3.schemeDark2);

  // Compute the position of each group on the pie:
  var pie = d3.pie()
    .sort(null) // Do not sort group by size
    .value(function(d) {return d.value; })
  var data_ready = pie(d3.entries(result))

  console.log(data_ready);

  // The arc generator
  var arc = d3.arc()
    .innerRadius(radius * 0.5)         // This is the size of the donut hole
    .outerRadius(radius * 0.8)

  // Another arc that won't be drawn. Just for labels positioning
  var outerArc = d3.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9)

  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  var slices = svg
    .selectAll('allSlices')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d){ return(color(d.data.key)) })
    .attr("stroke", "white")
    .style("stroke-width", "2px")
    .style("opacity", 0.7)

  // Add the polylines between chart and labels:
  svg
    .selectAll('allPolylines')
    .data(data_ready)
    .enter()
    .append('polyline')
      .attr("stroke", "black")
      .style("fill", "none")
      .attr("stroke-width", 1)
      .attr('points', function(d) {
        var posA = arc.centroid(d) // line insertion in the slice
        var posB = outerArc.centroid(d) // line break: we use the other arc generator that has been built only for that
        var posC = outerArc.centroid(d); // Label position = almost the same as posB
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
        posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
        return [posA, posB, posC]
      })

  // Add the polylines between chart and labels:
  svg
    .selectAll('allLabels')
    .data(data_ready)
    .enter()
    .append('text')
      .text( function(d) { console.log(d.data.key) ; return d.data.key } )
      .attr('transform', function(d) {
          var pos = outerArc.centroid(d);
          var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
          pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
          return 'translate(' + pos + ')';
      })
      .style('text-anchor', function(d) {
          var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
          return (midangle < Math.PI ? 'start' : 'end')
      })

}

// Create and load an HTML drop down manu with the available years.
function loadYears(){
  var year = ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"]
  var sel = document.getElementById("selYear");
  for (var i=0; i<year.length; i++){
    var opt = document.createElement('option');
    opt.innerHTML = year[i];
    opt.value = year[i];
    sel.appendChild(opt);
  };
}

function loadCountry(){
  var country = ["Argentina", "Brazil", "Canada", "Germany", "Italy", "Russia", "Saudi Arabia", "United Kingdom", "United States"]
  var sel = document.getElementById("selCountry");
  for (var i=0; i<country.length; i++){
    var opt = document.createElement('option');
    opt.innerHTML = country[i];
    opt.value = country[i];
    sel.appendChild(opt);
  };
}

function loadIndicator(){
  var trade_indicator = ["Micro Export (US$ Thousand)", "Micro Import (US$ Thousand)"]
  var sel = document.getElementById("selIndicator");
  for (var i=0; i<trade_indicator.length; i++){
    var opt = document.createElement('option');
    opt.innerHTML = trade_indicator[i];
    opt.value = trade_indicator[i];
    sel.appendChild(opt);
  };
}

function loadFlow(){
    var trade_flow = ["Export", "Import"]
    var sel = document.getElementById("selFlow");
    for (var i=0; i<trade_flow.length; i++){
      var opt = document.createElement('option');
      opt.innerHTML = trade_flow[i];
      opt.value = trade_flow[i];
      sel.appendChild(opt);
    };
  }


loadYears();
loadCountry();
loadIndicator();
// loadFlow();
createDataSet();
