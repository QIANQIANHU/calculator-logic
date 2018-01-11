var add = function(number1,number2) {
  return number1 + number2;
};
var substract = function(number1,number2) {
  return number1 - number2;
};
var multiply = function(number1,number2) {
  return number1 * number2;
};
var divide = function(number1,number2) {
  return number1 / number2;
};

$(document).ready(function () {
  $("form#calculator").submit(function (event) {
    event.preventDefault();
    var number1 = parseInt(($("#firstNumber").val());
    var number2 = parseInt(($("#secondNumber").val());
    var addResult = add (number1, number2);

    $("#output1").text(addResult);
  });
 });
