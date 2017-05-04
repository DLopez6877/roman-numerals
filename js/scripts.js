var convOne = function (userInput) {
  if (userInput === 1 ) {
    return "I";
  }
};

var romanCalc = function(userInput) {
  return convOne(userInput);
};

// User Interface goes here
$(document).ready(function() {
  $("form#romanform").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#numberInput").val());
    var result = romanCalc(userInput);
    $("#result").text(result);
    console.log(result);
  });
});
