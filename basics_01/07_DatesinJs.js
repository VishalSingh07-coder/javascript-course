// const moonLanding = new Date('July 20, 69 20:17:40 GMT+00:00');
// console.log(moonLanding);
// console.log(moonLanding.getTime());
let BD=new Date("July 29,1997 23:15:20")
let Today=new Date()
// console.log(Today);
let today=Today.getTime()//milliseconds from 1 Jan 1970 to present day

// console.log(today);
// let newDate=new Date()
// console.log(newDate.getTime());
let bd=BD.getTime()

let years=1000*60*60*24*365
let year=(today-bd)/years //Formula to calculate present age

// console.log(Math.round(year));

let myDate=new Date()
// console.log(myDate);//2023-10-07T10:29:29.139Z

// console.log(myDate.toString()) //Sat Oct 07 2023 10:30:28
// console.log(myDate.toLocaleString()) //10/7/2023, 10:31:12 AM (mm/dd/yy)
// console.log(typeof myDate) //object
//custom date 
// myCreateddate=new Date(2023,0,10) //date start with 0 so 0(in months)==Jan

let myCreateddate=new Date("2023-01-30")
// console.log(myCreateddate);
// console.log(myCreateddate.toLocaleString());

let present_date= Date.now()
// console.log(present_date);//in milliseconds
// console.log(Math.round(present_date/1000));//in seconds

//SOME BASIC FUNCTIONS
let myTimestamp=new Date()

// console.log(myTimestamp.getDay);
// console.log(myTimestamp.getMonth()+1);//start with 0 as months

myTimestamp.toLocaleString('default' ,{
    weekday:"narrow"
})
console.log(myTimestamp);