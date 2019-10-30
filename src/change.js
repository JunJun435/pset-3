const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("Invalid.");
} else if (amount < MIN || amount > MAX) {
    console.log("Invalid.");
} else {
    const q = Math.floor(amount / 0.25);
    let change = amount - (q * 0.25);

    const d = Math.floor(change / 0.1);
    change = change - (d * 0.1);

    const n = Math.floor(change / 0.05);
    change = change - (n * 0.05);

    const p = Math.round(change / 0.01);
    console.log(q + " quarters, " + d + " dimes, " + n + " nickels, and " + p + " pennies.");

}
