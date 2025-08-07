// let price = 25;
// let compPrice = price;

// price = 15;
// compPrice = 10;
// console.log(price)
// console.log(compPrice)

// let products = [20,22,21]
// // let compPrice = products;
// // products[1] = 12;
// // console.log(products)
// // console.log(compPrice)
// const compProduct = [];
// for(const pd of products){
//     compProduct.unshift(pd)
//     console.log(pd)
// }


const numbers = [1,2,3,4,]
// const newNumbers = [].concat(numbers)
// const newNumbers  =  Array.from(numbers)
// newNumbers.push(8)
const newNumbers = [...numbers]
console.log(numbers)
console.log(newNumbers)