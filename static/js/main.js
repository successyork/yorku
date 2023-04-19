function closeOverLay() {
  $(".overlay").hide();
}

function query() {
  var words = $("#search").val();
  var output;
  $.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + words)
    .done(function (response) {
      output = response[0].meanings[0].definitions[0].definition;
      openOverlay(words, output);
    })
    .fail(function (error) {
      output = error.responseJSON.message;
      openOverlay(words, output);
    });
  return false;
}

function openOverlay(word, definition) {
  $(".word").html(word);
  $(".definition").html(definition);
  $(".overlay").show();
}

function viewCard(cardId) {
  openOverlay($(cardId).html());
  return false;
}

$(document).ready(function () {
  $(".slide-show").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
  });
});
