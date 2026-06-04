// Problem 9: Pattern Printing - Pyramid

let n = 5;

for (let i = 1; i <= n; i++) {
  let spaces = "";
  let stars = "";

  for (let j = 1; j <= n - i; j++) {
    spaces = spaces + " ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    stars = stars + "*";
  }

  console.log(spaces + stars);
}
