function closeOverLay() {
  $(".overlay").hide();
}

function query() {
  var words = $("#search").val();
  $.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + words).done(
    function (response) {
      console.log(response);
      var output = response[0].meanings[0].definitions[0].definition;
      openOverlay(output);
    }
  );
  return false;
}

function openOverlay(text) {
  $(".overlay-content").html(text);
  $(".overlay").show();
}

function viewCard(cardId) {
  openOverlay($(cardId).html());
  return false;
}
