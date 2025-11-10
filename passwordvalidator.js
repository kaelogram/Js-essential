/**
 * Create a function that validates a password based on these rules:
 * - At least 8 characters long
 * - Contains at least one uppercase letter
 * - Contains at least one lowercase letter  
 * - Contains at least one number
 * - Contains at least one special character (!@#$%^&*)
 */

function validatePassword(password) {
    if (password.length < 8) {
        return false
    } else if (
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password)) {
        return true
    } else {
        return false
    }
}

// Test case
console.log(validatePassword("Weak"));
console.log(validatePassword("Weaking123%$"));
console.log(validatePassword("strongpass"));
console.log(validatePassword("Strong123!"));

