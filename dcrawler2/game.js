document.addEventListener("DOMContentLoaded", function () {
    // Function to load JSON data from a file
    function loadJSON(path, callback) {
      var xobj = new XMLHttpRequest(); // Creates a new HTTP request object
      xobj.overrideMimeType("application/json"); // Specifies the type of data being retrieved
      xobj.open('GET', path, true); // Opens an asynchronous GET request to the specified path
  
      // Defines a function to handle the request's state change event
      xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == 200) { 
          // The request is complete and the server responded with a status code of 200 (success)
          // Callback function to handle the JSON data
          callback(xobj.responseText);
        }
      };
      xobj.send(null); // Sends the request without any data
    }
  
    // Function to display the map on the HTML screen
    function displayMap(mapData) {
      var map = JSON.parse(mapData); // Parse the JSON data string into a JavaScript object
      var mapContainer = document.getElementById('game-map'); // Get the element from the HTML to display the map
  
      // Clear the existing content of the map container to prepare for the new map
      mapContainer.innerHTML = '';
  
      // Create a table to represent the grid of the map
      var table = document.createElement('table');
      table.classList.add('map'); // Add a CSS class to style the map table
  
      // Loop through each row in the map data
      for (var row = 0; row < map.length; row++) {
        var tableRow = document.createElement('tr'); // Create a new row for each row in the data
  
        // Loop through each cell/tile in the current row
        for (var col = 0; col < map[row].length; col++) {
          var tileType = map[row][col]; // Get the type of tile for the current position
          var tile = mapData.tiles[tileType]; // Get the tile object from the map data
          var tileSymbol = tile.symbol || '?'; // Use the symbol from the tile object, or '?' if not defined
          var tileClass = `tile ${tile.type}`; // Add a CSS class corresponding to the tile type
          var tableCell = document.createElement('td'); // Create a new cell for the table
          tableCell.classList.add(tileClass); // Add the CSS class to the cell
          tableCell.textContent = tileSymbol; // Set the text content of the cell to the tile symbol
          tableRow.appendChild(tableCell); // Add the cell to the current row
        }
        table.appendChild(tableRow); // Add the row to the main map table
      }
      mapContainer.appendChild(table); // Display the map table in the 'game-map' element of the HTML
    }
  
    // Load the map data from the JSON file and display it
    loadJSON('mapData.json', displayMap);
  });
  