var romanCalc = function(userInput) {

  return userInput + ('a');
};

// User Interface goes here
$(document).ready(function() {
  $("form#romanform").submit(function(event) {
    event.preventDefault();
    var userInput = ($ ("input#numberInput").val());
    var result = romanCalc(userInput);
    $("#result").text(result);
  });
});
