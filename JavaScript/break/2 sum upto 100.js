/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/


let n = 1;
let sum = 0;
while (n <= 50) {
    sum=sum+n
    console.log(sum)
    n++;
    if(sum>100){
        break
    }
}