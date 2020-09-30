let sum = 0;
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.forEach(num => sum += num)
console.log(sum);

let countries = ['Vietnam', 'Singapore', 'Finland']
countries.forEach(print =>
    console.log(print.toUpperCase()));

let numArr = [1, 2, 3, 4, 5, 6, 10, 8, 4];
// 1st way to find max value in an array
/*
for large arrays, with very large arrays of 4000 items or 
more, a for loop is the 
fastest method by far, so keep that in mind. It may be ugly,
 but it works.
*/

let max = Math.max.apply(null, numArr)
console.log(max)

//for loop
let max1 = 0;
for (i = 0; i < numArr.length; i++) {
    let currentValue = numArr[i];
    if (currentValue > max1) {
        max1 = currentValue;
    }
}
console.log(max1);

//map

