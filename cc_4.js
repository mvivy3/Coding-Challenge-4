// Task 1: Customer Discounts
let purchaseAmount = 5000; // Declare purchaseAmount with a value

if (purchaseAmount > 100 ) { // Check to see if the purchaseAmountis greater than $100
    } else {
    }
    function calculateDiscount() { // Define a function that calculates tax
        return this.purchaseAmount * 0.10; // Multiply the amount by 10% tax rate and return the value
    }
    finalAmount = purchaseAmount * 0.10;
    console.log(`Final amount after discount: $${finalAmount}`);


// Task 2: Sales Report
let sales = [1000, 2000, 3000, 4000, 5000]; // Declare an array sales
let totalSales = 0;
for (let i = 0; i < sales.length; i++) { // Use a for loop to calculate the total sales
    totalSales += sales[i];
}
console.log("Total sales:" + totalSales); // Log the total sales 


// Task 3: Inventory Depletion
let stock = 10; // Declare stock with an initial value of 10
while (stock >= 0) { // Use a while loop to decrease stock until it reaches zero
    console.log("Stock is: ", stock); // Print the current stock
    stock--; // Decrement the value of count by 1


// Task 4: Customer Survey
let responses = 0; // Declare responses with an initial value of 0

do { // Use a do...while loop to collect responses until it reaches 3
    console.log(`Customer response ${responses}`);
    responses++ // simulating user input 
} while (responses <= 3);
console.log(responses); // Log each response count


// Task 5: Employee Information
let employee = {
    name: "Teddy",
    position: "Manager",
    salary: 100000
};
for (let property in employee) { // Use a for...in loop
    console.log(`${property}: ${employee[property]}`); // Log each property
}


// Task 6: Product Listings
let products = ["Eraser", "Pencil", "Highlighter"]; // Declare an array products
 
for (let product of products) { // Use a for...of loop
    console.log(`Display, ${products}!`); // Log each product name
 }


 // Task 7: Order Processing
 let orders = [100, 101, 102]; // Declare an array orders

 orders.forEach((order, index) => { // Use the forEach() method
    console.log(`Orders ${index + 1}: $${order}`); // Log each order ID
 }); 


// Task 8: Tax Calculation
 function calculateTax(amount, taxRate) { // Write a function calculateTax
    return amount * taxRate; // Return the calculated tax
 }
 const totalAmount = 500; // Total amount = $500
 const taxRate = 0.08; // 8% tax rate
 const tax = calculateTax(totalAmount, taxRate);
 console.log(`Tax: $${tax}`); // Log the result
