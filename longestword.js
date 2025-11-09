/**
 * Write a function that takes a sentence and returns the longest word
 * If there are multiple words with the same length, return the first one
 */


function findLongestWord(sentence) {
    const words = sentence.split (" ");
    let longestWord = "";
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
// Test cases

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Hello word programming"));