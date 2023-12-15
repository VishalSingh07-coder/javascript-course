//primitive datatypes

//7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

let name="Vishal Singh"
let num=10
let isLoggedIn=true
let temp=null
let username;

let Id=Symbol('123')
let anotherId=Symbol('123')

console.log(Id===anotherId);
let bigNumber=3313232324232n

//reference (non-primitive)
//Array, Objects, Function

const powerRangers=["SPD","Ninja Furry","Samurai"]

let details={
    name:"VishalSingh",
    Id:7
}
let myFunction=function()
{
    console.log("hello world");
}
console.log(typeof myFunction);