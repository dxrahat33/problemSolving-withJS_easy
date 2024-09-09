// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let longestWord = '';
    for(let word of words) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

const inputSentence = "I am learning Programming to become a programmer";
const largerWord = findLongestWord(inputSentence);
console.log(largerWord);