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
