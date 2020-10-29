function high_low() {
  var element = document.getElementById('sort');
  sorting(true);
  element.innerHTML = 'Sort by: High-Low';
}

function low_high() {
  var element = document.getElementById('sort');
  sorting(false);
  element.innerHTML = 'Sort by: Low-High';
}

//This function sorts products by price
function sorting(is_reverse) {
  var current_row = document.querySelectorAll('#products .column')[0];
  var row_index = 0;
  //Get number of products
  var item_length = document.querySelectorAll('#products .cropped').length;
  //Get prices of each product
  var prices_list = document.getElementsByClassName('productPrice');
  //This dictionary saves alt for each product
  var alt_dictionary = {
    "product1": "transparent Biodegradable reusable cup",
    "product2": "Simple Biodegradable reusable cup",
    "product3": "reusable cup",
    "product4": "reusable cup",
    "product5": "reusable cup",
    "product6": "reusable cup",
    "product7": "reusable cup",
    "product8": "closeable Biodegradable reusable cup",
    "product9": "reusable cup"
  };
  //This dictionary saves price as key and product as value
  var price_dictionary = {};
  //Append keys(prices) and values(products) into price dictionary
  for (var i = 0; i < item_length; i++) {
    if (price_dictionary[prices_list[i].textContent.substring(1)] == undefined) price_dictionary[prices_list[i].textContent.substring(1)] = ["product" + (i + 1)];
    else price_dictionary[prices_list[i].textContent.substring(1)].push("product" + (i + 1));
  }
  //Store keys(float) into 'keys' variable
  var keys = Object.keys(price_dictionary).map(Number);
  //sort keys (low-high)
  keys.sort(function(a, b) {
    return a - b;
  });
  //When the function was called for high-low, it reverses keys
  if (is_reverse == true) keys.reverse();
  //This 'count' variable is to determine for new row 
  var count = 0;

  for (var i = 0; i < keys.length; i++) {
	//repeat as many as number of values with keys
    for (var j = 0; j < price_dictionary[keys[i].toFixed(2)].length; j++) {
      //When three products in the same column, it sets a next column
      if ((count) % 3 == 0) {
        current_row = document.querySelectorAll('#products .column')[row_index];
        current_row.innerHTML = '';
        row_index += 1;
      }
      var current_product = price_dictionary[keys[i].toFixed(2)][j];
      current_row.innerHTML += '<img src="images/products/' + current_product +
        '.jpg" class="cropped" onclick=' +
        "'openModal(\"" + current_product + "\")' alt=\"" + alt_dictionary[current_product] + "\">";
      count += 1;
    }
  }
}

//This function gets id as parameter to close popup
function closeModal(ID) {
  var doc = document.getElementById(ID);
  doc.style.visibility = 'hidden';
  doc.style.opacity = 0;
}

//This function gets id as parameter to open popup
function openModal(ID) {
  var doc = document.getElementById(ID);
  doc.style.visibility = 'visible';
  doc.style.opacity = 1;
}
