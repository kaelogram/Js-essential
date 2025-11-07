/**
 * Create a calculator function that takes two numbers and an operator (+, -, *, /)
 * and returns of the operations
 * Handles divisiom by zero by returning "Cannot divide by zero"
 * 
 * 
 * */


function calculator(num1, num2, operator) {
    if (operator === "+") {
        console.log(num1 + num2)
    } else if (operator === "-") {
        console.log(num1 - num2)
    } else if (operator === "/") {
        if (num1 === 0 || num2 === 0) {
            console.log("Cannot be divided by zero")
        } else console.log(num1 / num2)
    } else if (operator === "*") {
        console.log(num1 * num2)
    } else {
        console.log("Invalid Operators")
    }
}




// Test cases
console.log (calculator(10, 5, "+"));
console.log (calculator(10, 5, "-"));
console.log (calculator(10, 0, "/")); /*should return cannot divide by zero*/
console.log (calculator(10, 10, "*"));


