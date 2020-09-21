
//ass1
let text = 'I love teaching and empowering people, I teach HTML,  CSS,JS, React, Python';
let arr = text.split(' ');
console.log(arr);

//ass2 
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat') //adding Meat to the beginning of the array
shoppingCart.pop('Honey');//remove Honey to the beginning of the array
shoppingCart.push('Sugar'); //adding Sugar to the end of the array
console.log(shoppingCart);

shoppingCart[2] = 'Green Tea'; //modify Tea to 'Green Tea'
console.log(shoppingCart);

/*In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
If it does not exist add to the countries list.*/
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
if (countries.includes('Ethiopia')){
    console.log('ETHIOPIA');
}else{
    countries.push('Ethiopia');
    console.log(countries);
}


/*In the webTechs array check if Sass exists in the array and if it exists 
print 'Sass is a CSS preprocess'. 
If it does not exist add Sass to the array and print the array.*/

const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] 
if (webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess');
}else{
    webTechs.push('Sass');
    console.log(webTechs);
}

/*Concatenate the following 
two variables and store it in a fullStack variables*/

let frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
let backEnd = ['Node','Express', 'MongoDB'];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);