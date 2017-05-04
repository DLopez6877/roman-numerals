var numbersOneNine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var romansOneNine = ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]

// convert single number into a roman numberal
var convert = function(userInput) {
  for(var index = 0; index < numbersOneNine.length; index += 1) {
    if (userInput === index) {
      userInput = romansOneNine[index];
      return userInput;
    }
  }
}
// var convert = function (userInput) {
//   // converts number 1 into "1"
//   if (userInput === 1) {
//     return "I";
//     // converts number 2 into "II"
//   } else if (userInput === 2) {
//     return "II";
//     // converts number 3 into "III"
//   } else if (userInput === 3) {
//     return "III";
//     // converts number 4 into "IV"
//   } else if (userInput === 4) {
//     return "IV";
//     // converts number 5 into "V"
//   } else if (userInput === 5) {
//     return "V";
//     // converts number 6 into "VI"
//   } else if (userInput === 6) {
//     return "VI";
//     // converts number 7 into "VII"
//   } else if (userInput === 7) {
//     return "VII";
//     // converts number 8 into "VIII"
//   } else if (userInput === 8) {
//     return "VIII";
//     // converts number 9 into "IX"
//   } else if (userInput === 9) {
//     return "IX";
//   } else {
//     return "";
//   }
// };



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
  });
});
