// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

let sentence = "I am a hard working person";

// Split the sentence into words, reverse the array, and join them back together
let reversedSentence = sentence.split(" ").reverse().join(" ");

console.log("Original Sentence: " + sentence);
console.log("Reversed Sentence: " + reversedSentence);
