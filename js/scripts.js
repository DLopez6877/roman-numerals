
var convert = function (userInput) {
  // converts number 1 into "1"
  if (userInput === 1) {
    return "I";
    // converts number 2 into "II"
  } else if (userInput === 2) {
    return "II";
    // converts number 3 into "III"
  } else if (userInput === 3) {
    return "III";
  } else {
    return "ooga booga";
  }
};



// final calculator function
var romanCalc = function(userInput) {
  return convert(userInput);
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
