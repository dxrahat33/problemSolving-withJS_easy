/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

for (let n = 1; n <= 100; n++) {
    if(n % 2 !== 0){
        continue
    }
    console.log(n)
}