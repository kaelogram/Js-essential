/**
 * Create a function that reverses a string without using built-in reverse() method
 */
function reverseString(str) {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }

    return reversed;

}

// Test cases
console.log (reverseString ("hello"));
console.log (reverseString("JavaScript"));