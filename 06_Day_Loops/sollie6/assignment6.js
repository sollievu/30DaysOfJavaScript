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



