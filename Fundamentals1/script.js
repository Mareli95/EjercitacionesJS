/*
//* Linking a JavaScript File
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

//* Values and Variables
console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

//*Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);
//
//* END Variable name conventions
//*Data Types
let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

javaScriptIsFun = 'Yes';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

//* End Data Types

//* let, const, var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Rubio';
console.log(lastName);
//* END let, const, var

//*Basic Operators

//* Math Operators
const now = 2080;
const ageMariana = now - 1995;
const ageSara = now - 2018;
console.log(ageMariana, ageSara);
console.log(ageMariana * 2, ageSara / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
const firstName = 'Jonas';
const lastName = 'Izaguirre';
console.log(firstName + ' ' + lastName);

//* Assigments operators
let x = 10 + 5; // 15
x += 10; // x = x + 10;
x *= 4; // x = x + 10;
x++; // x = x + 10;
x--; // x = x + 10;
x--; // x = x + 10;

console.log(x);

//*Comparison Operators
console.log(ageMariana > ageSara); // >,<,<=,>=
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;
console.log(now - 1995 > now - 2018);
//*End of Operators


//* Operator Precendence
const now = 2080;
const ageMariana = now - 1995;
const ageSara = now - 2018;
console.log(now - 1995 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10;
console.log(x, y);
//* END Operator Precendence
*/

//* String and Template Literal
const firstName = 'Mariana';
const job = 'designer';
const birthYear = 1995;
const year = 2037;

const mariana = 'I´m ' + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(mariana);

const marianaNew = `I´m ${firstName}'`;
console.log(marianaNew);

//* END String and Template Literal
