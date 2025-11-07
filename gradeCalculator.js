/**
 * write a function that takes a student's score (0-100) and returns their grade:
 * 90 - 100 "A"
 * 80 - 89 "B"
 * 70 - 79 "C"
 * 60 - 69 "D"
 * BELOW 60 "F"
 */

function calculateGrade(score) {
    if (score >= 90 && score <= 100 ) {
        return "A" 
    } 
    else if (score >= 80 && score <= 89) {
            return "B"
        }
    else if (score >= 70 && score <= 79) {
            return "C"
        }
    else if (score >= 60 && score <= 69) {
            return "D"
        }
    else if (score <= 60) {
            return "F"    
        }
    else  {
        return "score is invalid"
    }  

} 

// Test case
console.log(calculateGrade(91));
console.log(calculateGrade(87));
console.log(calculateGrade(72));
console.log(calculateGrade(65));
console.log(calculateGrade(40));