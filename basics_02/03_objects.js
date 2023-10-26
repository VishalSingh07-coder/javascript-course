//objects can be created using diffrent methods 
//by using singleton pattern design (search)
//objects can be created by using object() or by literal syntax

//using literal syntax
const mysym=Symbol("key1");
const user={
    name:"Vishal Singh",     //name and employee id both are act as key and both are correct syntax to make a key 

    "employee id":55,        //name by default act as string 
    email:"vishalsingh@google.com",
    age:20,

    [mysym]:"mykey1" // syntax to use symbol
}

// console.log(user.email);
// console.log(user["employee id"]);//both are same
// console.log(user[mysym]);
// console.log(user);

user.email="vishalsingh@microsoft.com"
// Object.freeze(user)
user.email="vishalsingh@123.com"
// console.log(user.email);


//objects functions
user.greetings=function()
{
    console.log("hi JS user");
}
user.greetingsTwo=function()
{
    console.log(`my name is ${this.name}`);
}
console.log(user.greetings())

console.log(user.greetingsTwo());
