const readlineSync = require("readline-sync");

let month = readlineSync.question("\nEnter a month: ");

let lowercase = month.toLowerCase();

if (lowercase === "january" || lowercase === "jan") {
  console.log("\n31 days.");
} else if (lowercase === "february" || lowercase === "feb") {
  console.log("\n28 or 29 days.");
} else if (lowercase === "march" || lowercase === "mar") {
  console.log("\n31 days.");
} else if (lowercase === "april" || lowercase === "apr") {
  console.log("\n30 days.");
} else if (lowercase === "may") {
  console.log("\n31 days.");
} else if (lowercase === "june" || lowercase === "jun") {
  console.log("\n30 days.");
} else if (lowercase === "july" || lowercase === "jul") {
  console.log("\n31 days.");
} else if (lowercase === "august" || lowercase === "aug") {
  console.log("\n31 days.");
} else if (lowercase === "september" || lowercase === "sep") {
  console.log("\n30 days.");
} else if (lowercase === "october" || lowercase === "oct") {
  console.log("\n31 days.");
} else if (lowercase === "november" || lowercase === "nov") {
  console.log("\n30 days.");
} else if (lowercase === "december" || lowercase === "dec") {
  console.log("\n31 days.");
} else {
  console.log("\nInvalid.");
}
