let firstName = "Sollie";
let lastName = "Vu";
let country = "Vietnam";
let city = "Dong Nai";
let age = "25";
let isMarried = "no";
let year = new Date();
console.log(firstName);
console.log(lastName);
console.log(country);
console.log(city);
console.log(age);
console.log(isMarried);
console.log(year.getFullYear());
console.log('10'===10);
console.log(parseInt('9.8'==10));
let a = "sollie";
let b = "vu";
let c = 10;
let d = 5;
let e = 'mango';
console.log(a.length == b.length);
console.log(a)
console.log(a+' '+b)
console.log(a<d);
console.log(c+d);
console.log(a>c)

console.log(4>3);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4 === 4);
console.log(4!=4);
console.log(4!==4);
console.log(4!="4");
console.log(4=='4');
console.log(4==='4');

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

let currentTime = new Date();
console.log(currentTime.getFullYear());
console.log(currentTime.getMonth() +1);
console.log(currentTime.getDate());
console.log(currentTime.getDay());
console.log(currentTime.getHours());
console.log(currentTime.getMinutes());
console.log(currentTime.getTime());


let triangle1 = prompt('enter base number');
let triangle2 = prompt('enter height');
let triangleArea = confirm((triangle1*triangle2)/2);

/*Write a script that prompt the user to enter side a, side b, and side c 
of the triangle and and calculate the perimeter of triangle 
(perimeter = a + b + c)*/

let side_a= parseInt(prompt('enter side a'));
let side_b= parseInt(prompt('enter side b'));
let side_c= parseInt(prompt('enter side c'));
let perimeter = side_a + side_b + side_c;
confirm(perimeter);

/*Get length and width using prompt and calculate an area of rectangle 
(area = length x width and 
the perimeter of rectangle (perimeter = 2 x (length + width))*/ 
let length= parseInt(prompt('enter length'));
let width= parseInt(prompt('enter width'));
let perimeter = 2 * (length + width);
confirm(perimeter);

/* Get radius using prompt and calculate the area of a circle 
(area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14. */ 
let radius = parseInt(prompt('enter radius'));
let pi = 3.14;
let area = pi * radius * radius;
let circumference = 2 * pi * radius;
console.log(confirm(area));
console.log(confirm(circumference));

//Calculate the slope, x-intercept and y-intercept of y = 2x -2//
let x
let y = 2*x - 2;
console.log(y);

//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?//
/*Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120*/
let hours = parseInt(prompt('Enter hours'));
let rate = parseInt(prompt('Enter rate per hour'));
let yourEarning = parseInt(confirm(hours*rate));

//If the length of your name is greater than 7 say, your name is long else say your name is short.//
var yourName = "sollievu";
console.log(yourName)
if (yourName.length > 7){
    console.log('long name');
}else{
    console.log('short name');
}

//Compare your first name length and your family name length and you should get this output.//
let firstName = 'Sollie';
let lastName = 'Vu';
if (firstName.length > lastName.length){
    console.log("your first name is longer than your last name");
}else{
    console.log("your first name is shorter than your family name");
}

//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.//
let myAge = 50;
let yourAge = 26;
let differenceInAge = myAge - yourAge;
if (myAge > yourAge){
    console.log('I am ', myAge - yourAge,' years older than you');
}else{
    console.log('I am ', yourAge - myAge,' years older than you');
}

/*Using prompt get the year the user was born and if the user is 18 
or above allow the user to drive if not tell the user to wait a certain amount of years.*/

let yearBorn= parseInt(prompt('when were you born?'));
let age = new Date().getFullYear() - yearBorn;
if (age>=18){
    console.log('you are allowed to drive');
}else{
    console.log('you are not allowed to drive. You will be allowed to drive after', 18 - age, 'years');
};


/*Write a script that prompt the user to enter number of years. 
Calculate the number of seconds a person can live. Assume some one lives just hundred years*/
let yearBorn= parseInt(prompt('when were you born?'));
confirm(100*365*24*60*60 - yearBorn.getSeconds());
needed to fix
