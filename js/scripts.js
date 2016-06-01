// The business (or back-end) logic:

var surveyComplete = function(genre, style, birthdate, color) {
  $(".genre").text(genre);
  $(".style").text(style);
  $(".birthdate").text(birthdate);
  $(".color").text(color);
};

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  $("form#survey-answers").submit(function(event) {
    var genre = $("#genre").val();
    var style = $("input:radio[name=style]:checked").val();
    var birthdate = $("#birthdate").val();
    var color = $("#color").val();

    surveyComplete(genre, style, birthdate, color);

    event.preventDefault();
  });
});
