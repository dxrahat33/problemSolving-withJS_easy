// Count how many times a string has the letter a

const sentence = 'hello, i am parvez ahmed. i live in bangladesh. In bangladesh i live at savar, dhaka. A single family live aside me.';

let count = 0;

for (let i = 0; i < sentence.length; i++) {
    if(sentence[i] === 'a') {
        count++
    }
}
console.log(count);