// Problem 7: Fibonacci Series

let n = 10;
let first = 0;
let second = 1;

console.log(first);
console.log(second);

for (let i = 3; i <= n; i++) {
  let next = first + second;
  console.log(next);

  first = second;
  second = next;
}
