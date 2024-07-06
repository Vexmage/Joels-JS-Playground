// Function to load JSON data from a file
function loadJSON(path, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', path, true);
    xobj.onreadystatechange = function() {
      if (xobj.readyState == 4 && xobj.status == "200") {
        // Callback function to handle the JSON data
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
  }
  
  // Function to display the map on the HTML screen
  function displayMap(mapData) {
    var map = JSON.parse(mapData);
    var mapContainer = document.getElementById('mapContainer');
  
    // Clear the existing content of the map container
    mapContainer.innerHTML = '';
  
    // Create a table to display the map
    var table = document.createElement('table');
    table.classList.add('map');
  
    for (var row = 0; row < map.length; row++) {
      var tableRow = document.createElement('tr');
  
      for (var col = 0; col < map[row].length; col++) {
        var tile = map[row][col];
        var tableCell = document.createElement('td');
        tableCell.classList.add(tile);
        tableRow.appendChild(tableCell);
      }
  
      table.appendChild(tableRow);
    }
  
    mapContainer.appendChild(table);
  }
  
  // Load the map data from the JSON file and display it
  loadJSON('map.json', displayMap);
  