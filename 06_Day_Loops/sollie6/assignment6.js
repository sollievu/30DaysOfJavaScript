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
    'Kenya'
  ]
//Iterate 0 to 10 using for loop, do the same using while and do while loop//

// for loop
  for (let i = 0; i < countries.length; i++){
     console.log(countries[i]);
  }
  
// while loop
let i = 0;
while (i < countries.length){
    console.log(countries[i])
    i++
}

//do while loop
let i = 0;
do {
    console.log(countries[i]);
    i++
}while (i<countries.length);

//Iterate 10 to 0 using for loop, do the same using while and do while loop
// for loop
for (i = countries.length; i >= 0; i--)
{
    console.log(countries[i]);
 }
 
// while loop
 
let i = countries.length;
while (i >= 0){
   console.log(countries[i]);
   i--;
}
//do while loop
let i = countries.length;
do {
   console.log(countries[i]);
   i--
}while (i>=0);

  const webTechs = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Redux','Node', 'MongoDB'
  ]

//Iterate 0 to 10 using for loop, do the same using while and do while loop//

 //for loop
  for (j = 0; j < webTechs.length; j++){
    console.log(webTechs[j]);
  }

  //while loop
  let j = 0;
  while (j<webTechs.length){
      console.log(webTechs[j])
      j++
  }

  //do while loop
  let j = 0;
  do { 
      console.log(webTechs[j])
      j++
  }while (j<webTechs.length);

  //Iterate 10 to 0 using for loop, do the same using while and do while loop
  //for loop
  for (let j= webTechs.length; j >=0; j--){
    console.log(webTechs[j]);
}

// while loop
let j = 0;
while (j=webTechs.length){
    console.log(webTechs[j])
    j--
}

//do while loop
let j = webTechs.length;
do {
    console.log(webTechs[j]);
    j--
}while(j>=0);

  const mernStack = ['MongoDB', 'Express', 'React', 'Node']


//Write a loop that makes the following pattern using console.log():
/*  #
    ##
    ###
    ####
    #####
    ######
    ####### 
    */

    for (let i = '#'; i.length <= 7; i=i+"#"){
      console.log(i);
    }

 /*Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100 */ 


let i=0;
for(i >= 0; i< 11; i++){
  console.log(i, ' x ', i, ' = ', i*i);
}



/*Use for loop to iterate 
from 0 to 100 and print the sum of all evens and the sum of all odds.

The sum of all evens 
from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500 */
let sumOddNumbers = 0;
let sumEvenNumbers = 0;
for (let j = 0; j <= 100 ; j++){
  if (j % 2 ==0){
    sumEvenNumbers += j;
    console.log(sumEvenNumbers);
  }else{
    sumOddNumbers += j;
    console.log(sumOddNumbers);
  }
}
sumEvenNumbers;
sumOddNumbers;

// Develop a small script which generate array of 5 random numbers




