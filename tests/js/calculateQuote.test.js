import { calculateQuote, calculateQuoteTotal } from "../../src/calculateQuote.js";

const items1 = [
  {
    name: "Labor",
    quantity: 10,
    unitPrice: 50
  },
  {
    name: "Materials",
    quantity: 3,
    unitPrice: 100
  }
];

const items2 = [
  {
    name: "Labor",
    quantity: 5,
    unitPrice: 100
  },
];

const items3 = [];

const testCalculateQuoteTotal = () => {
  const expectedTotal1 = 800;
  const total1 = calculateQuoteTotal(items1);

  if (expectedTotal1 !== total1) {
    throw new Error('Total with 2 items is not equal to expected value!');
  }

  const expectedTotal2 = 500;
  const total2 = calculateQuoteTotal(items2);

  if (expectedTotal2 !== total2) {
    throw new Error('Total with one item is not equal to expected value!');
  }
}

const testCalculateQuote = () => {
  const subtotal1 = calculateQuote(items1).subtotal;
  const expectedTotal1 = 800;
  if (expectedTotal1 !== subtotal1) {
    throw new Error('Subtotal with 2 items is not equal to expected value!');
  }

  const subtotal2 = calculateQuote(items2).subtotal;
  const expectedTotal2 = 500;
  if (expectedTotal2 !== subtotal2) {
    throw new Error('Subtotal with one item is not equal to expected value!');
  }

  const emptyQuote = {};
  const quote = calculateQuote([]);
  if (JSON.stringify(emptyQuote) !== JSON.stringify(quote)) {
    throw new Error('The result has been returned by calculateQuote func with an empty array is not an empty object!');
  }; 

  console.log('All the tests have passed!');
}

testCalculateQuoteTotal();
testCalculateQuote();
