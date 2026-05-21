// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
// Tasks:
//     1. Use filter() to get only inStock products
const inStockProducts=cart.filter(item=>item.inStock);
console.log("In Stock Products:",inStockProducts);
//     2. Use map() to create a new array with:  { name, totalPrice }
const productTotals=cart.map(item=>({
  name:item.name,
  totalPrice:item.price*item.quantity
}));
console.log("Product Totals:",productTotals);
//     3. Use reduce() to calculate grand total cart value
const Total = cart.reduce((total,item)=> 
  total+(item.price*item.quantity),0);
console.log("Total Cart Value:",Total);
//     4. Use find() to get details of "Mouse"
let findingMouse=cart.find(ele=>ele.name==="Mouse")
console.log("Mouse details are",findingMouse)
//     5. Use findIndex() to find the position of "Keyboard"
let findingIndex=cart.findIndex(ele=>ele.name==="Keyboard")
console.log("Index of Keyboard is",findingIndex)
