var numbersOneNine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// convert single number into a roman numeral
var convertOneDigit = function(userInput) {
  var newArray = [];
  var numArray = userInput.toString().split("");


  var oneDigitRoman = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
  for(var index = 0; index < numbersOneNine.length; index += 1) {
    if (parseInt(numArray[numArray.length-1]) === index) {
      newArray.push(oneDigitRoman[index]);
    }
  }
  return newArray.toString();

}


// Convert a two digit number into a roman numeral
var convertTwoDigit = function(userInput) {
  var twoDigitRoman = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
  var newArray = [];
  var numArray = userInput.toString().split("");


  for(var index = 0; index < numbersOneNine.length; index += 1) {
    if (parseInt(numArray[numArray.length-2]) === index) {
      newArray.push(twoDigitRoman[index]);
    }
  }
  return newArray.toString();
}

// Convert a three digit number into a roman numeral
var convertThreeDigit = function(userInput) {
  var threeDigitRoman = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
  var newArray = [];
  var numArray = userInput.toString().split("");


  for(var index = 0; index < numbersOneNine.length; index += 1) {
    if (parseInt(numArray[numArray.length-3]) === index) {
      newArray.push(threeDigitRoman[index]);
    }
  }
  return newArray.toString();
}

var romanCalc = function(userInput) {
  var newArray = [];

  var oneDigit = convertOneDigit(userInput); //
  var twoDigit = convertTwoDigit(userInput);
  var threeDigit = convertThreeDigit(userInput);

  newArray.push(threeDigit + twoDigit + oneDigit);

  return newArray.toString(); // 12
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
