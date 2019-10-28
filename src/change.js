const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));
  const coinValue = [.25. .1, .05, .01] //[quarters, dimes, nickels, pennies]
if (Number.isNaN(amount)) {
    console.log("\nInvalid");
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid")
} else {
    let coins;
}
