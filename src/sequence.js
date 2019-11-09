const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let firstNumber = Number(readlineSync.question("\nEnter three numbers.\n\n"));
let secondNumber = Number(readlineSync.question(""));
let thirdNumber = Number(readlineSync.question(""));

if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber) || Number.isNaN(thirdNumber)) {
  console.log("\nInvalid.");
} else if (firstNumber < MIN || firstNumber > MAX || secondNumber < MIN || secondNumber > MAX || thirdNumber < MIN || thirdNumber > MAX) {
  console.log("\nInvalid.");
} else if (firstNumber === secondNumber && secondNumber === thirdNumber) {
  console.log("\nEqual.");
} else if (firstNumber < secondNumber && secondNumber < thirdNumber) {
  console.log("\nStrictly increasing.");
} else if (firstNumber <= secondNumber && secondNumber <= thirdNumber) {
  console.log("\nIncreasing.");
} else if (firstNumber > secondNumber && secondNumber > thirdNumber) {
  console.log("\nStrictly decreasing.");
} else if (firstNumber >= secondNumber && secondNumber >= thirdNumber) {
  console.log("\nDecreasing.");
} else {
  console.log("\nUnordered.");
}
