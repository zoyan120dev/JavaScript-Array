const color =  ['red', 'blue', 'green', 'yellow', 'orange'];
const revColor = color.reverse();
console.log(revColor);

const numberssa = [12, 98, 5, 41, 23, 78, 46];
for(let num of numberssa){
    if(num % 2 == 0){
        console.log(num)
    }
}

let numbers = ['Tom', 'Tim', 'Tin', 'Tik']
let newNum = numbers.join('')
console.log(newNum)


const statement = 'I am a hard working person';
const reverse = statement.split('').reverse().join('');
console.log(reverse)

const inputNumber = [1,2,3];
let copyNumber = inputNumber;

copyNumber = [99, 2, 3];
console.log(inputNumber)
console.log(copyNumber)


const userInfo = [
    {
        name:"john",
        marks: 85,
    },

    {
        name:"Alice",
        marks: 90,
    },
]

for(let userdata of userInfo){
    const personInfo  = userdata.name + ' scored' + ' ' + userdata.marks;
    console.log(personInfo);
}


