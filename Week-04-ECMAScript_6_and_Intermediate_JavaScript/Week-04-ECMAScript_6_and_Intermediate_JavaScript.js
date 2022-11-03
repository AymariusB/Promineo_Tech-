let a = 150;

const monthlyPayment = yearlyPayment=>{
    let monthly = yearlyPayment / 12;
    return monthly.toFixed(2);
};
a
console.log(monthlyPayment);

let number = 3;
const doubleNumber = (number)=>{
    return number*2};
console.log(doubleNumber);

//The product owner on your development team believes they've seen a pattern as to which customers purchase the most socks. To verify, you've been asked to write a function that processes an array of customer objects and return a new array that contains only customers that match ANY of the following criteria:

//name starts with a 'C' (upper or lowercase)
//address contains no undefined fields
//the city is Peoria and the state is AZ
//membership level is GOLD or PLATINUM unless the customer is younger than 29, then SILVER is okay too

