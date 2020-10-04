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

// let max = Math.max(...numArr)
// console.log(max)
// let min = Math.min(...numArr)
// console.log(min)

//
//for loop
let max1 = 0;
let min1 = numArr[0];
for (i = 0; i < numArr.length; i++) {
    let currentValue = numArr[i];
    if (currentValue > max1) {
        max1 = currentValue;
    }
    if (currentValue < min1) {
        min1 = currentValue;
    }
}

console.log(max1);
console.log(min1);

//function to find max and min
function getMax(solliebd) {
    let findMax = Math.max(...solliebd)
    return findMax
}
function getMin(solliebd) {
    let findMin = Math.min(...solliebd)
    return findMin;
}

console.log(getMax(numArr));
console.log(getMin(numArr));


//map
let numbers = [1, 4, 9]
let max = numbers[0];
numbers.map(function (num) {
    if (max <= num) {
        max = num;
    }
})
console.log(max);

let numB = [5, 4, 9];
let getMinNumber = numB[0];
numB.map(function (num) {
    if (getMinNumber >= num) {
        getMinNumber = num;
    }
})
console.log(getMinNumber)

//to Uppercase 
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
let toUpperName = names.map(function (a) {
    return a.toUpperCase();
})
console.log(toUpperName)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
let toUpperCaseCountries = countries.map(function (b) {
    return b.toUpperCase()
})
console.log(toUpperCaseCountries)

//filter
let countriesIncludeLand = countries.filter(function (a) {
    return a.includes("land")
})
console.log(countriesIncludeLand)

let countriesHaveFiveLetter = countries.filter(function (d) {
    return d.length === 5
})
console.log(countriesHaveFiveLetter)


//setInterval
// let sayHiId = setInterval(sayHi,2000)
// function sayHi() { 
//     console.log(sayHi)
// }
// setInterval(sayHi,2000)
// clearInterval(sayHiId)

//Function in JS
/* function a(para1, para2) {
    do StyleSheetreturn hoac la ko return
}
*/

function generatePyramid(num) {
    var totalNumberofRows = 5;
    var arr = new Array();
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            arr.push(j);
            console.log(j);
        }
        console.log("\n");
    }
}
generatePyramid(2)

const NumLines = 5;
draw(5);
function draw(number) {
    for (i = 1; i <= NumLines; i++) {
        let line = '';
        for (j = 0; j < i; j++) {
            line = line + ' ' + number;
        }

        console.log(line)
    }
}
/*
" 5"
" 5 5"
" 5 5 5"
" 5 5 5 5"
" 5 5 5 5 5"*/

const NumLines = 5;

function draw2(num2) {
    for (let i = 1; i <= NumLines; i++) {
        var row = '';// always 5 rows

        for (let j = 1; j <= (NumLines - i); j++) {
            row = row + "  "; //numbers of spaces
        }
        for (var k = 1; k <= i; k++) {
            row = row + " " + num2;//numbers of num2
        }

        console.log(row);
    }
}

draw2(6)

/*"       6"
"       6 6"
"     6 6 6"
"   6 6 6 6"
" 6 6 6 6 6"
*/

const numLines = 5;
function draw2(num2) {

    for (let i = 1; i <= numLines; i++) {
        var row = '';
        for (let j = 1; j <= (numLines - i + 1); j++) {
            row = row + " " + num2;
        }

        console.log(row);
    }
}

draw2(5)
/*
" 5 5 5 5 5"
" 5 5 5 5"
" 5 5 5"
" 5 5"
" 5"
*/






