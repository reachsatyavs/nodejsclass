// Problem 7: Calculator Program

let num1 = 20;
let num2 = 10;
let operator = "+";

if (operator === "+") {
  console.log("Result: " + (num1 + num2));
} else if (operator === "-") {
  console.log("Result: " + (num1 - num2));
} else if (operator === "*") {
  console.log("Result: " + (num1 * num2));
} else if (operator === "/") {
  console.log("Result: " + (num1 / num2));
} else {
  console.log("Invalid operator");
}
