export function getLatestConversion() {
  let base = document.getElementById("baseCurrency").value;
  let target = document.getElementById("targetCurrency").value;
  let amount = document.getElementById("amount").value;

  fetch(
    `https://api.freecurrencyapi.com/v1/latest?base_currency=${base}&currencies=${target}&apikey=fca_live_RyKW9w3cpgCMH06ZRRoGw2EH8giXkfgvqRXmMEOe`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched data:", data);
      let conversionRate = data.data[target];
      document.getElementById(
        "convertedAmount"
      ).innerHTML = `${amount} ${base} is worth ${
        conversionRate * amount
      } ${target}`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

export function getHistoricalConversion() {
  let base = document.getElementById("baseCurrency").value;
  let target = document.getElementById("targetCurrency").value;
  let date = document.getElementById("date").value;
  let amount = document.getElementById("amount").value;

  fetch(
    `https://api.freecurrencyapi.com/v1/historical?date=${date}&base_currency=${base}&currencies=${target}&apikey=fca_live_RyKW9w3cpgCMH06ZRRoGw2EH8giXkfgvqRXmMEOe`
  )
    .then((response) => response.json())
    .then((data) => {
      // Handle fetched data
      console.log("Fetched data:", data);

      let conversionRate = data.data[date][target];
      console.log(conversionRate);

      // Display the converted amount and details
      document.getElementById(
        "historicalConvertedAmount"
      ).innerHTML = `${amount} ${base} was worth ${
        conversionRate * amount
      } ${target} on ${date}`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// get currency list as IIFE to run on page load
(function getCurrencies() {
  fetch(
    `https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_RyKW9w3cpgCMH06ZRRoGw2EH8giXkfgvqRXmMEOe`
  )
    .then((response) => response.json())
    .then((data) => {
      let abbr = [];
      let name = [];

      // loop through each currency object in the data
      Object.keys(data.data).forEach((key) => {
        abbr.push(key); // push abbreviation of currency
        name.push(data.data[key].name); // push name of currency
      });

      const baseCurrencySelect = document.getElementById("baseCurrency");
      const targetCurrencySelect = document.getElementById("targetCurrency");
      let currencies = data.data;

      baseCurrencySelect.innerHTML = "";
      targetCurrencySelect.innerHTML = "";

      // go through each currency in the data and create <option> elements
      Object.keys(currencies).forEach((currencyCode) => {
        const currencyName = currencies[currencyCode].name;

        // create option elements for baseCurrencySelect and targetCurrencySelect
        const baseOption = document.createElement("option");
        baseOption.value = currencyCode;
        baseOption.textContent = currencyName;

        const targetOption = document.createElement("option");
        targetOption.value = currencyCode;
        targetOption.textContent = currencyName;

        baseCurrencySelect.appendChild(baseOption);
        targetCurrencySelect.appendChild(targetOption);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
})();
