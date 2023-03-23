function closeOverLay() {
  $(".overlay").hide();
}

function search() {
  openOverlay("");
}

function openOverlay(text) {
  $(".overlay-content").html(text);
  $(".overlay").show();
}

function viewCard(cardId) {
  openOverlay($(cardId).html());
  return false;
}
