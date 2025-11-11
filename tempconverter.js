/**
 * Create a function that converts temperatures between Celsius and Fahrenheit
 * The function should take two parameters: the temperature and the unit to convert to ('C' or 'F')
 * Formula: 
 * - C to F: (C × 9/5) + 32
 * - F to C: (F - 32) × 5/9
 */



function convertTemperature(temp, unit) {
    if (unit === "F") {
        return (temp * 9/5) + 32
    } else if (unit === "C") {
        return (temp - 32) * 5/9
    } else {
        return "Invalid unit"
    }
}

// Test cases
console.log(convertTemperature(0, "F"));    // Should return 32
console.log(convertTemperature(32, "C"));   // Should return 0
console.log(convertTemperature(100, "F")); // Should return 212

