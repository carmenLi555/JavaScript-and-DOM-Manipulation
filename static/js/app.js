// from data.js
var tableData = data;
//console.log(tableData);

// YOUR CODE HERE! 
// write code that appends a table to your web page 
//and then adds new rows of data for each UFO sighting.

// Get a reference to the table body
var tbody = d3.select("tbody");



tableData.forEach(function(ufo) {
    console.log(ufo);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufo).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


  //Use a date form in your HTML document and 
  //write JavaScript code that will listen for events 
  //search through the date/time column to find rows that match user input.
 
  // Select the button


// Select the form
var button = d3.select("#filter-btn");


button.on("click", function(event){
    d3.event.preventDefault();
    tbody.html("");

var date_input = d3.select("#datetime");
var inputValue = date_input.property("value");

var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
filteredData.forEach(function(dateData){
    var row=tbody.append("tr");
    Object.entries(dateData).forEach(function([key,value]){
    var cell=tbody.append("td");
    cell.text(value);
        });
    });
});

