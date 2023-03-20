function toggleCardDetails(elementID) {
  var element = document.querySelector(elementID);
  if (element.style.visibility == "hidden") {
    element.style.visibility = "visible";
  } else {
    element.style.visibility = "hidden";
  }
  return false;
}
