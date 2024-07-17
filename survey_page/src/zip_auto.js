// zipcode-autocomplete.js

// Function to perform AJAX request
function fetchZipcodeData(zipcode) {
    // Construct the URL to your JSON file
    var url = 'zipcodes.json'; // Replace with your actual JSON file path
  
    // Perform AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        handleZipcodeData(data, zipcode);
      }
    };
    xhr.send();
  }
  
  // Function to handle the retrieved data
  function handleZipcodeData(data, zipcode) {
    var found = false;
    for (var i = 0; i < data.zipcodes.length; i++) {
      if (data.zipcodes[i].zip === zipcode) {
        document.getElementById('city').value = data.zipcodes[i].city;
        document.getElementById('state').value = data.zipcodes[i].state;
        found = true;
        break;
      }
    }
    if (!found) {
      alert('Invalid zip code');
    }
  }
  
  // Event listener for the zip code input field
  document.getElementById('zip').addEventListener('blur', function() {
    var zipcode = this.value.trim();
    if (zipcode.length === 5 && /^\d+$/.test(zipcode)) {
      fetchZipcodeData(zipcode);
    } else {
      alert('Zip code should be exactly 5 digits');
    }
  });
  