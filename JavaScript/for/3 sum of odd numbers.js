

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

// subtask----1
let total = 0;

for (let i = 91; i <= 129; i++) {
    if (i % 2 !== 0) {
        total += i
    }
}
console.log('the sum of total odd number from 92 to 129 is:', total);

// subtask---------------2 (51-85)
let sum = 0;

for (let i = 51; i <= 85; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log("The sum of all even numbers from 51 to 85 is:", sum);