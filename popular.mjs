// load page with popular conversions on start

// add button to update in real time.

// add css

(function getDollarToEuro() {
  let base = "USD";
  let target = "EUR";
  let amount = 1;

  fetch(
    `https://api.freecurrencyapi.com/v1/latest?base_currency=${base}&currencies=${target}&apikey=fca_live_RyKW9w3cpgCMH06ZRRoGw2EH8giXkfgvqRXmMEOe`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched data:", data);
      let conversionRate = data.data[target];
      document.getElementById(
        "dollarToEuro"
      ).innerHTML = `${amount} ${base} is worth ${
        conversionRate * amount
      } ${target}`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
})();

document
  .getElementById("dollarToEuroBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    getDollarToEuro();
  });

(function getDollarToYen() {
  let base = "USD";
  let target = "JPY";
  let amount = 1;

  fetch(
    `https://api.freecurrencyapi.com/v1/latest?base_currency=${base}&currencies=${target}&apikey=fca_live_RyKW9w3cpgCMH06ZRRoGw2EH8giXkfgvqRXmMEOe`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched data:", data);
      let conversionRate = data.data[target];
      document.getElementById(
        "dollarToYen"
      ).innerHTML = `${amount} ${base} is worth ${
        conversionRate * amount
      } ${target}`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
})();

document
  .getElementById("dollarToYenBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    getDollarToYen();
  });

(function getDollarToRupee() {
  let base = "USD";
  let target = "INR";
  let amount = 1;

  fetch(
    `https://api.freecurrencyapi.com/v1/latest?base_currency=${base}&currencies=${target}&apikey=fca_live_RyKW9w3cpgCMH06ZRRoGw2EH8giXkfgvqRXmMEOe`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched data:", data);
      let conversionRate = data.data[target];
      document.getElementById(
        "dollarToRupee"
      ).innerHTML = `${amount} ${base} is worth ${
        conversionRate * amount
      } ${target}`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
})();

document
  .getElementById("dollarToRupeeBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    getDollarToRupee();
  });
