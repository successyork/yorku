function closeOverLay() {
  $(".overlay").hide();
}

function query() {
  var words = $("#search").val();
  var output;
  $.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + words)
    .done(function (response) {
      output = response[0].meanings[0].definitions[0].definition;
      openOverlay(output);
    })
    .fail(function (error) {
      output = error.responseJSON.message;
      openOverlay(output);
    });
  return false;
}

function openOverlay(text) {
  //$(".overlay-content").html(text);
  $(".overlay").show();
}

function viewCard(cardId) {
  openOverlay($(cardId).html());
  return false;
}
