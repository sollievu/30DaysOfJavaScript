/*Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback 
stating to wait for the number of years he neds to turn 18.*/
let age = parseInt(prompt('Enter your age'));
if (age >= 18) { 
    console.log("You are old enough to drive");
} else {
    console.log("you have to wait for", 18 - age, "to drive");
}

/*Compare the values of myAge and yourAge using if … else. Based on the comparison and log 
the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input*/
let myAge = parseInt(prompt('Enter my age'));
let yourAge = parseInt(prompt('Enter your age'));
if (myAge > yourAge) { 
    confirm("I am older than you", myAge - yourAge, "years old");
} else if (myAge = yourAge) {
    confirm("We are at the same age");
} else {
    confirm("you are older than me", yourAge - myAge, "years old");
}

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways//
//1st way
const a = 10;
const b = 200;
if (a > b){
    console.log('a is greater than b');
}else{
    console.log('a is less than b');
}

//2nd way
const c = 10;
const d = 200;
c > d ? console.log('c is greater than d') : console.log('c is less than d');

/*Even numbers are divisible by 2 and the remainder is zero. How do you check, 
if a number is even or not using JavaScript?*/
const e = 99;
e%2==0 ? console.log("e is an even number") : console.log("e is an odd number");

//Write a code which can give grades to students according to theirs scores//
/*80-100, A
70-89, B
60-69, C
50-59, D
0-49, F*/

function giveGrade(studentScore){
    if (studentScore >= 80 && studentScore <=100) { 
        console.log('A');
    }else if (studentScore >=70 && studentScore <=89){
        console.log('B');
    }else if (studentScore >=60 && studentScore <=69){
        console.log('C');
    }else if (studentScore >=50 && studentScore <=59){
        console.log('D');
    }else{
        console.log('F');
    };
    }

/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/
function seasonCheck(month){
    if (month == 'September'|| month== 'October'||month =='November'){ 
        season = 'Autumn';
        return 'the season is '+ season;
    }else if (month== 'December'|| month == 'January'|| month == 'February'){ 
        season = 'Winter';
        return 'the season is '+  season;
    }else if (month== 'March'|| month == 'April'|| month == 'May') { 
        season = 'Spring';
        return 'the season is '+  season;
    }else{
        season = 'Summer';
        return 'the season is '+  season;
    }
}


