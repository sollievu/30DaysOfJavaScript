

// const numbers = [1, 2, 3, 4]
// const sumArray = arr => {
//     let sum = 0;
//     numbers.forEach(function(element){
//         sum +=element;
//     }) 
//     return sum 
// }
// console.log(sumArray(numbers));
const myTimer = setInterval(timer,1000)
let duration = 30;
const timer = () => {
    if (duration == 0) {
        clearInterval(myTimer);
    } else {
        console.log(duration -=1);
    }
}

