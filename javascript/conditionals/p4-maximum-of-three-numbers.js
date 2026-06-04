// Problem 4: Maximum of Three Numbers

let a = 10;
let b = 25;
let c = 15;

if (a > b) {
  if (a > c) {
    console.log("Largest number is: " + a);
  } else {
    console.log("Largest number is: " + c);
  }
} else {
  if (b > c) {
    console.log("Largest number is: " + b);
  } else {
    console.log("Largest number is: " + c);
  }
}
