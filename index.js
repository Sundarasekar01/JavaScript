/* ------------------------------------- Introduction ------------------------------------------- */


// JavaScript = scripting language for webpages
//              can be used for both client-side and server-side developments.

// This is a command

/*
   this 
   is 
   a 
   command
*/

// console.log('print statement');
// window.alert('how are you');

// document.getElementById('abc').textContent = 'hi';





/* ------------------------------------- Variables ------------------------------------------- */


// variable = A container that stores a value.
//                   Behaves as if it were the value it contains.

// let fullName = "Bro Code";
// let age = 25;
// let isStudent = false;

// console.log(typeof fullName);
// console.log(typeof age);
// console.log(typeof isStudent);

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;





/* -------------------------------- Arithmetic Operators ------------------------------------------- */



// arithmetic operators = operands (values, variables, etc.)
//                                         operators (+ - * /)
//                                         ex. 11 = x + 5;

// let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//let extraStudents = students % 3;

// console.log(students);

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

//students++;
//students--;

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/


// let result = (2+8) * 3+1 - 2**3 ; 
// console.log(result);

/*  
Explanation :

=> 10 * 3+1 - 8
=> 30 + 1 - 8
=> 31-8 
=> 23 
*/          




/* -------------------------------- User Input ------------------------------------------- */



// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox


// EASY WAY 

// let username = window.prompt("What's your username?");
// console.log(username);


// PROFESSIONAL WAY 

// let data;

// document.getElementById('submit').onclick = ()=>{
//     data= document.getElementById('text').value ;
//     document.getElementById('abc').textContent = data ;
// }



/* -------------------------------- Type Conversion ------------------------------------------- */


// type conversion = change the datatype of a value to another
//                                 (strings, numbers, booleans)


// EXAMPLE 1

// let age = window.prompt("How old are you?");
// age = Number(age);
// age+=1;

// console.log(age, typeof age);


// EXAMPLE 2 

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);




/* -------------------------------- Constants ------------------------------------------- */


// const = a variable that can't be changed

// const PI = 3.14159;
// let radius;
// let circumference;

// PI = 420.69;

// document.getElementById("submit").onclick = function(){
//     radius = document.getElementById("text").value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById("abc").textContent = circumference + " cm";
// }




/* -------------------------------- Counter Program ------------------------------------------- */


// const INCRE = document.getElementById('incre');
// const DECRE = document.getElementById('decre');
// const RESET = document.getElementById('reset');
// const COUNTER = document.getElementById('counter');

// let count = 0;

// INCRE.onclick = ()=>{
//    count++;
//    COUNTER.textContent= count;
// }


// RESET.onclick = ()=>{
//     count = 0;
//     COUNTER.textContent= count;
//  }
 

// DECRE.onclick = ()=>{
//     count--;
//     COUNTER.textContent= count;
// }
 




/* -------------------------------- Math Object ------------------------------------------- */



// Math = built-in object that provides a
//              collection of properties and methods

// let x = 3;
// let y = 2;
// let z = 1;

//console.log(Math.PI);
//console.log(Math.E);

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(x, y);
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x);
//z = Math.sign(x);


// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);

// console.log(min);





/* -------------------------------- Random Number Generator ------------------------------------------- */



// RANDOM NUMBER GENERATOR

const NUM1 = document.getElementById('num1');
const NUM2 = document.getElementById('num2');
const NUM3 = document.getElementById('num3');
const GENERATE = document.getElementById('btn');

const MIN = 23;
const MAX = 45;

let random1 = 0 ;
let random2 = 0;
let random3 = 0 ;


GENERATE.onclick = function(){
    random1 = Math.floor(Math.random() * MAX) + MIN ;
    random2 = Math.floor(Math.random() * MAX) + MIN ;
    random3 = Math.floor(Math.random() * MAX) + MIN ;
    NUM1.textContent = random1;
    NUM2.textContent = random2;
    NUM3.textContent = random3;
}





/* -------------------------------- Constants ------------------------------------------- */


