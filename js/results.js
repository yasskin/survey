// The business (or back-end) logic:

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var processData = function(genre, style, birthdate, color) {
  $(".genre").text(genre);
  $(".style").text(style);
  $(".birthdate").text(birthdate);
  $(".color").text(color);
};

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  var genre = getParameterByName('genre');
  var style = getParameterByName('style');
  var birthdate = getParameterByName('birthdate');
  var color = getParameterByName('color');
  processData(genre, style, birthdate, color);
})
