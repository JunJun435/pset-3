const readlineSync = require("readline-sync");

const grade = readlineSync.question("\nEnter a grade: ");

let threshold
const a = "90-100";
const b = "80-90";
const c = "70-80";
const d = "60-70";
const f = "0-60";
if (grade <= 100 && grade >= 90) {
  console.log("\nYou received an A.")
} else if (grade < 90 && grade >= 80) {
  console.log("\nYou received an B.")
} else if (grade < 80 && grade >= 70) {
  console.log("\nYou received an C.")
} else if (grade < 70 && grade >= 60 ) {
  console.log("\nYou received an D.")
} else if (grade < 60 && grade >= 0) {
  console.log("\nYou received an F.")
} else
  console.log("\nInvalid.");
