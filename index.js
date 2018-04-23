
import { table } from '../node_modules/table';
   
  // Using commonjs?
  // const {table} = require('table');
   
  let data, output;
   
  data = [
      ['0A', '0B', '0C'],
      ['1A', '1B', '1C'],
      ['2A', '2B', '2C']
  ];

output = table(data);

function get() {
    console.log(output)
};



/*
const displayTable = document.querySelector('#table-output');

const endPoint = "https://coinmarketcap.com/api/";

//const searchInput = document.getElementById("search-coin");

const currency = ["AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "ZAR"]

console.log(endPoint);

*/