// Problem 10: Triangle Type

let side1 = 5;
let side2 = 5;
let side3 = 5;

if (side1 === side2 && side2 === side3) {
  console.log("Equilateral triangle");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
  console.log("Isosceles triangle");
} else {
  console.log("Scalene triangle");
}
