const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const n1 = Number(readlineSync.question("\nEnter three numbers.\n\n"));
const n2 = Number(readlineSync.question(""));
const n3 = Number(readlineSync.question(""));

if (n1 < n2 < n3) {
  console.log("\nStrictly increasing.");
} else if (number1 <= n2 <= n3) {
  console.log("\nIncreasing.");
} else if (number1 == n2 == n3) {
  console.log("\nEqual.");
} else if (n1 >= n2 >= n3) {
  console.log("\nDecreasing.");
} else if (n1 > n2 > n3) {
  console.log("\nStrictly decreasing.");
} else if (!(Number(n1) || Number(n2) || Number(n3)) || !(MIN) || !(MAX)) {
  console.log("\nInvalid.");
} else {
  console.log("\nUnordered.");
}
