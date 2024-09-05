// Check whether a string contains all the vowels a, e, i, o, u

const sentence = 'education';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let results = true;
for (let i = 0; i < vowels.length; i++) {
    if (!sentence.includes(vowels[i])) {
        results = false;
        break;
    }
}

console.log(results);