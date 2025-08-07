const color =  ['red', 'blue', 'green', 'yellow', 'orange'];
const revColor = color.reverse();
console.log(revColor);

const numbers = [12, 98, 5, 41, 23, 78, 46];
for(let num of numbers){
    if(num % 2 == 0){
        console.log(num)
    }
}