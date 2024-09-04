/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

/**
 * ************this is my method****************
 */
// let p = 0;
// for (let n = 1; n <= 100; n++) {
//     p = n * n;
//     if (p <= 1) {
//         continue
//     }
//     console.log(p)
//     if (p = n * n){
//         break
//     }
// }

/**
 * **********this is from group********************
 */

for (let i = 1; i <= 100; i++) {
    let n = i ** 0.5;
    if (i > 1 && Number.isInteger(sqrt)) {
        console.log(i);
        break
    }
}