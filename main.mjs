import * as currency from "./currency.mjs";

document
  .getElementById("latestRates")
  .addEventListener("click", function (event) {
    event.preventDefault();
    currency.getLatestConversion();
  });

document
  .getElementById("historicalRates")
  .addEventListener("click", function (event) {
    event.preventDefault();
    currency.getHistoricalConversion();
  });
