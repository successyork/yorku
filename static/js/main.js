function closeOverLay() {
  $(".overlay").hide();
}

function query() {
  var words = $("#search").val();
  var output;
  $.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + words)
    .done(function (response) {
      output = response[0].meanings[0].definitions[0].definition;
      var phonetic = response[0].phonetics[0];
      openOverlay(words, output, phonetic.text, phonetic.audio);
    })
    .fail(function (error) {
      output = error.responseJSON.message;
      openOverlay(words, output);
    });
  return false;
}

function openOverlay(word, definition, phonetic, audio) {
  $(".word").html(word);
  $(".definition").html(definition);
  $(".phonetic").html(phonetic);
  $("#audio-source").attr("src", audio);
  $("#audio").trigger('load');
  $(".overlay").show();
}

function playAudio() {
  $("#audio").trigger("play");
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
