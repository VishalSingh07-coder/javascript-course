//array
//JavaScript arrays are resizable and can contain a mix of different data types
//JavaScript array-copy operations create shallow copies


const myArr=[1,2,3,4,5,6]
const myHeroes=[1,2,3,4,5,6,"ironman","hulk","captain america","dr strange"]

// console.log(myHeroes);
const myArr2=new Array(1,2,3,4)
myArr2.push(5);
myArr2.push(6);

myArr2.push(7);
// console.log(myArr2);
myArr2.pop()
// console.log(myArr2);

//if we want to insert value on index 0 then we use unshift method
myArr2.unshift(9)

// console.log(myArr2);
myArr2.shift()//pop the value from index 0
// console.log(myArr2);
//check the value is present in array
// console.log(myArr2.includes(9));

const newArr=myArr2.join()//join operation changes array to string type
// console.log(myArr2);
// console.log(newArr);// it returns value in string format

//slice splice
console.log("A",myArr2);
console.log(myArr2.slice(1,3));// it return values at index 1,2
console.log("B",myArr2);

console.log(myArr2.splice(1,3));//it return values at index 1,2,3

console.log("C",myArr2);