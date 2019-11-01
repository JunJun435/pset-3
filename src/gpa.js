const readlineSync = require("readline-sync");

const letterGrade = readlineSync.question("\nEnter a letter grade: ");

if (letterGrade === "A" || letterGrade === "A+") {
  console.log("\nYour GPA is 4.00.")
} else if (letterGrade === "A-") {
  console.log("\nYour GPA is 3.67.")
} else if (letterGrade === "B+") {
  console.log("\nYour GPA is 3.33.")
} else if (letterGrade === "B") {
  console.log("\nYour GPA is 3.00.")
} else if (letterGrade === "B-") {
  console.log("\nYour GPA is 2.67.")
} else if (letterGrade === "C+") {
  console.log("\nYour GPA is 2.33.")
} else if (letterGrade === "C") {
  console.log("\nYour GPA is 2.00.")
} else if (letterGrade === "C-") {
  console.log("\nYour GPA is 1.67.")
} else if (letterGrade === "D+") {
  console.log("\nYour GPA is 1.33")
} else if (letterGrade === "D") {
  console.log("\nYour GPA is 1.00.")
} else if (letterGrade === "D-") {
  console.log("\nYour GPA is 0.67.")
} else if (letterGrade === "F") {
  console.log("\nYour GPA is 0.00.")
} else
  console.log("\nInvalid.");
