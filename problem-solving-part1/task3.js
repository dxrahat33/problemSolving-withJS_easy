// Write a function to count the number of vowels in a string.

function countVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

const inputString = "I am an educated person";
const vowelsCount = countVowels(inputString);
console.log(vowelsCount);