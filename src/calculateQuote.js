const initialValue = 0;

export const calculateQuoteTotal = items => items.reduce((accumulator, item) => {
  return accumulator + item.quantity * item.unitPrice
}, initialValue);

export const calculateQuote = (items, taxRate = 0.08) => {
  const subtotal = calculateQuoteTotal(items)
  const tax = subtotal * taxRate;
  const total = subtotal + tax;
  
  return {
    subtotal,
    tax,
    total,
  }
};