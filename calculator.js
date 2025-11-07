/**
 * Create a calculator function that takes two numbers and an operator (+, -, *, /)
 * and returns of the operations
 * Handles divisiom by zero by returning "Cannot divide by zero"
 * 
 * 
 * */


function calculator(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2
    } else if (operator === "-") {
        return num1 - num2
    } else if (operator === "/") {
        if (num1 === 0 || num2 === 0) {
            return "Cannot be divided by zero"
        } else {
            return num1 / num2
        }
    } else if (operator === "*") {
        return num1 * num2
    } else {
        return "Invalid Operators"
        }
}
calculator()


// Test cases
console.log (calculator(10, 5, "+"));
console.log (calculator(10, 5, "-"));
console.log (calculator(10, 0, "/")); /*should return cannot divide by zero*/
console.log (calculator(10, 10, "*"));


