
function fullName(first,last){
    let full = first + ' ' + last;
    return full
    }
    console.log(fullName('Sollie','Vu'));


function sum(num1,num2){ 
    let sumNum = num1 + num2;
    return sumNum
}
console.log(sum(2,7));

/*An area of a rectangle is calculated as follows: 
area = length x width. Write a function which 
calculates areaOfRectangle.*/

function areaOfRectangle(a,b){ 
    let area = a * b;
    return area;
}
console.log(areaOfRectangle(5,7));

/*A volume of a rectangular prism is calculated as follows: 
volume = length x width x height. Write a function which calculates volumeOfRectPrism.*/
function volumeOfRectPrism(a,b,c){ 
    let volume = a * b * c;
    return volume
}
console.log(volumeOfRectPrism(4,5,7));

/* Area of a circle is calculated
as follows: area = π x r x r. Write a function which calculates areaOfCircle */
  function areaOfCircle(r) {
    let area = r * r * Math.PI
    return area
  } console.log(areaOfCircle(5))

/* Temperature in oC can be converted to oF using this formula:
 oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit*/
 function celToFah(celsius) {
    let fahrenheit = (celsius * (9/5)) + 32;
    return fahrenheit;
  } 
console.log(celToFah(20));

/* Declare a function name printArray. It takes array as a parameter and 
it prints out each value of the array. */

function printArray(arr) {
  for (let i = 0; i <  arr.length; i++) 
    console.log(arr[i])
}
printArray([2,3,4,5])





