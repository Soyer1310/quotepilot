import {calculateQuoteTotal, calculateQuote } from "./src/calculateQuote.js";

const items = [
  {
    name: "Labor",
    quantity: 10,
    unitPrice: 50
  },
  {
    name: "Materials",
    quantity: 3,
    unitPrice: 100
  },
  {
    name: "Delivery",
    quantity: 1,
    unitPrice: 75
  }
];

console.log(calculateQuote(items))