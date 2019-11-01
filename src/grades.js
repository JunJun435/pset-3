const readlineSync = require("readline-sync");

const A = MIN = 90, MAX = 100;
const B = MIN = 80, MAX = 89;
const C = MIN = 70, MAX = 79;
const D = MIN = 60, MAX = 69;
const F = MIN = 0, MAX = 59;

const grade = realineSync.question("\nEnter a grade: ");

if (grade = A) {
  console.log("\nYou received an A.")
} else if (grade = B) {
  console.log("\nYou received an B.")
} else if (grade = C) {
  console.log("\nYou received an C")
} else if (grade = D) {
  console.log("\nYou received an D")
} else if (grade = F) {
  console.log("\nYou received an F")
} else
  console.log("\nInvalid");
