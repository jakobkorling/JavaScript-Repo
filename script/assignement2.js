// Assignement 2 // 

// Prompt message 
let input = prompt("Enter price tag $49.99");

// Replaces dollar sign to nothing
let noDollarSign = input.replace("$", "");

//Declares priceTag to be a number and not text
let priceTag = Number(noDollarSign);

// Declares discount to be value of priceTag * 0.9 (10%)
let discount = priceTag * 0.9;

// Prints "Your discounted price is: $(value of entered numbers * 0.9 with only 2 decimals)"
console.log("Your discounted price is: $" + discount.toFixed(2));
