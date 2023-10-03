//stack and heap
//in stack the copy of variable is created means when we created the another variable the original value cannot change.
//All primitive datatypes are stored in stack


//heap
//All non-primitive datatypes are working on heap

//it use reference and original value get affected when second variable is created.
let num=10
let num1=num
num1=20

// console.log(num1); --20
// console.log(num); --10

let user1={
    email:"user1@gmail.com",
    upi:"user1@sbi"
}

let user2=user1
user2.email="user2@gmail.com"
console.log(user2);
console.log(user1);
//output  of both will be same