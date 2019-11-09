const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

let year = Number(readlineSync.question("\nEnter a year: "));

let remainder = yearInput % 4;

if (Number.isNaN(yearInput)) {
  console.log("\nInvalid.");
} else if (year < MIN || year > MAX) {
  console.log("\nInvalid.");
} else if (remainder > 0) {
  console.log("\n" + year + " is not a leap year.");
} else {
  console.log("\n" + year + " is a leap year.");
}
