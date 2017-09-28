// Task 1
var first = 5;

function squareNumber(number) {
  return number * number;
}

console.log("The result of squaring " + first + " is " + squareNumber(first));

// Task 2
var second = 10;

function halfNumber(number) {
  return number / 2;
}

console.log("Half of " + second + " is " + halfNumber(second));

// Task 3
var third = 10;
var fourth = 2.5;

function percentOf(number1, number2) {
  var timesDivided = number1 / number2 * 100;
  return timesDivided;
}

console.log(fourth + " is " + percentOf(fourth, third) + "%" + " of " + third);

// Task 4
var fifth = 2;

function areaOfCircle(radius) {
  return 3.141 * Math.sqrt(radius);
}

console.log(
  "The area of a circle with a radius of " +
    fifth +
    " is " +
    areaOfCircle(fifth).toFixed(2)
);

// Task 5
var sixth = 10;

function unknown(number) {
  var half = number / 2;
  var sqr = Math.sqrt(half);
  var area = areaOfCircle(sqr);
  var final = percentOf(sqr, area);
  return final;
}

console.log("The Final Answer is " + unknown(sixth));

// Alert button
function alertMe() {
  window.confirm("Check the logs, boi");
}
