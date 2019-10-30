const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const amount = Number(readlineSync.question("\nEnter a number: "));
if (amount < MIN || amount > MAX);
console.log("\nInvalid.")
if (amount == 0) {
  console.log("\nZero.");
} else if (amount > 0) {
  console.log("\nPositive.")
} else
console.log("\nNegative.");
