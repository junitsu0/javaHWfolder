console.log('Holla')

//==================Exercise #1 ==========//
/*
    Given the array [1, 2, 3, 5, 6, 7],  finds the index of the first non-consecutive element in the array.
    It should log out 3 because the array at index 3 is 5 which is not consecutive.
*/


let exerciseOneArr = [1, 2, 3, 5, 6, 7, 9, 10, 12]
/* // get all non-consecutives, not just first.
for (let i=1; i<exerciseOneArr.length; i++){
    if (exerciseOneArr[i]-1 != exerciseOneArr[i-1])
        console.log(i, exerciseOneArr[i]);  
    };
*/
//
for (i of exerciseOneArr)
    if (exerciseOneArr[i]-1 != exerciseOneArr[i-1]){
        console.log(i);
        break;
    };






//============Exercise #2 ============//
/*
Given the two array of numbers below, loop through them both individually and then sum all of the positive elements.

Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26

Note: if there is nothing to sum, the sum is default to 0.
*/

let numbers1 = [10, 12, -9, 3, -1, 0, 15]; 
let sum1toloveu = 0;

for (let n = 0; n < numbers1.length; n++)
    if (numbers1[n] > 0){
    sum1toloveu += numbers1[n];
    };

console.log(sum1toloveu);

let numbers2 = [3, 5, 7, 9, -10, 2, -22, -1];
let sum2nite = 0;

for (let x = 0; x < numbers2.length; x++)
    if (numbers2[x] > 0){
    sum2nite += numbers2[x];
};
console.log(sum2nite);

getsum = sum1toloveu + sum2nite;
console.log(getsum);