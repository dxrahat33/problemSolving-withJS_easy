// Count how many times a string has the letter a or A

const sentence = 'A familyaA. AA aaa'

let counta = 0;
let countA = 0;

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === 'A') {
        countA++;
    }
    else if(sentence[i]=== 'a') {
        counta++
    }
}
console.log(countA);
console.log(counta);
