getdata();
async function getdata() {
  const response = await fetch('https://jonsvillagetaxi.com/test.json', {
    mode: 'cors',
    credentials: "same-origin",
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }
  });
  const myJson = await response.json();
  console.log(myJson);

}

// axios.get('https://erikberg.com/mlb/standings.json')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })

// Create a request variable and assign a new XMLHttpRequest object to it.
// var request = new XMLHttpRequest()

// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

// request.onload = function () {
//   // Begin accessing JSON data here
//   console.log(this.response);

// }

// // Send request
// request.send()

//Width and height
var w = 800;
var h = 600;

//Define map projectionb


var projection = d3.geo.mercator() //utiliser une projection standard pour aplatir les pôles, voir D3 projection plugin
  .center([13, 52]) //comment centrer la carte, longitude, latitude
  .translate([w / 2, h / 2]) // centrer l'image obtenue dans le svg
  .scale([w / 1.5]); // zoom, plus la valeur est petit plus le zoom est gros

//Define path generator
var path = d3.geo.path()
  .projection(projection);


//Create SVG
var svg = d3.select("#container")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

var tooltip = d3.select("body")
  .append("div")
  .style("position", "absolute")
  .style("z-index", "10")
  .style("visibility", "hidden")
  .text("");
//Load in GeoJSON data
d3.json("assets/map.json", function (json) {
  console.log(json.features[10].properties.name);

  //Bind data and create one path per GeoJSON feature
  svg.selectAll("path")
    .data(json.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("stroke", "rgba(8, 81, 156, 0.2)")
    .attr("fill", "rgba(8, 81, 156, 0.6)")
    .on("mouseover", function (d) { return tooltip.style("visibility", "visible").text(d.properties.name); })
    .on("mousemove", function () { return tooltip.style("top", (event.pageY - 10) + "px").style("left", (event.pageX + 10) + "px"); })
    .on("mouseout", function () { return tooltip.style("visibility", "hidden"); });

});
