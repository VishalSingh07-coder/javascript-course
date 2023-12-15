//normal way to define number
const score=100
//new way
const num=new Number(100)
// console.log(score);
// console.log(num);
//by using this way of initializing we can use some functions on Number variables

//functions on numbers
// console.log(num.toString());//after converting number to string we can use functons of strings on numbers
// console.log(num.toString().length);
const othernum=124.54321

// console.log(othernum.toFixed(1));//value after point
// console.log(othernum.toPrecision(3));

const hundreds=10000000
// console.log(hundreds.toLocaleString('en-IN'));//give value in indian format

////////////////////////////maths///////////////////////////

// console.log(Math);//Math is of object type
// console.log(Math.abs(-4));// return value in positive
// console.log(Math.abs(4));
// console.log(Math.round(100.5787));//precise value
console.log(Math.ceil(4.4));// it is greater than 4 so it always retrun 5
// console.log(Math.floor(4.6));//returns 4
// console.log(Math.min(4,6,8,10));
// console.log(Math.max(2,4,6,8,10));
// console.log(Math.sqrt(36));

console.log(Math.random());//always between 0 and 1
console.log((Math.random()*10)+1);//raturn point value to >1
//range

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);//return always greater than min value
