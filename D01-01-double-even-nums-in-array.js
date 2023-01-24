/*
:computer:Write a function  that takes in an array of numbers as a parameter and uses the .forEach() method to double the value of all even numbers in the array. The function should not use any other loops or array methods.
:computer:Write a function that takes the array below and modifies its order as follows:
*/

const nums = [1, 2, 3, 4, 6, true, 'hello', '6'];
const copyNums = [...nums];

const doubleEvenNums = copyNums.forEach((element, index) => {
    if (element % 2 == 0) {
        copyNums[index] = element * 2;
    }
});

console.log(copyNums);


// Places values in new array we made called doubleArr
const doubleEvenNums2 = copyNums.forEach((element, index) => {
     doubleArr = [];
     if (element % 2 == 0) {
         doubleArr[index] = element * 2[index];
     } 
     return doubleArr;
    }
 );

 console.log(copyNums)





