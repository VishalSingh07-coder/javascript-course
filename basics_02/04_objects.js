//singleton object creation 
// const user=new Object()
const user={}
user.id="123"
user.name="Vishal Singh"
user.isLoggedIn=true;
// console.log(user);


//objects of objects
const regularuser={
    email:"vishalsingh@gmail.com",
    id :"123",
    fullname:{
        username:{
            firstname:"Vishal",
            lastname:"Singh"
        }
    }
}
// console.log(regularuser.fullname.username.firstname);

//combine two objects
const obj1={1:"a",2:"b",3:"c"};
const obj2={4:"d",5:"e",6:"f"};

const obj3={obj1,obj2}

console.log(obj3);
//output  
//{
    // obj1: { '1': 'a', '2': 'b', '3': 'c' },
    //obj2: { '4': 'd', '5': 'e', '6': 'f' }
 // }


// const obj4=Object.assign(obj1,obj2);
// console.log(obj4);

//spread method
// const obj6={...obj1,...obj2}
// console.log(obj6);


const new_user=[{
        id:"1",
        email:"vishal@gmail.com"
    },
    {
        id:"2",
        email:"singh@gmail.com"
    },
    {
        id:"3",
        email:"Anku@gmail.com"
    }]
// console.log(new_user[1].email);
// console.log(Object.keys(new_user));
// console.log(Object.values(new_user));
// console.log(Object.entries(new_user));
// console.log(user.hasOwnProperty("isLoggedIn"));

//destructuring of objects
//normal way
const course={
    coursename:"Js in hindi",
    courseinstructor:"Chai & Code",
    source:"Youtube"
}
// console.log(course.coursename); //default way but whrn we have to call other keys then it will take morem time

const{coursename:cname,courseinstructor:instructor,source}=course //we call all keys at one time
console.log(cname, instructor, source);

//json api 
// {
//     name:"Vishal",
//     id:"123",

//}
[
    {},
    {},
    {}
]
