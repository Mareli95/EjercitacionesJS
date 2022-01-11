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
// const firstName = 'Mariana';
// const job = 'designer';
// const birthYear = 1995;
// const year = 2037;

// const mariana = 'I´m ' + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(mariana);

// const marianaNew = `I´m ${firstName}'`;
// console.log(marianaNew);

//* END String and Template Literal

//* IF Else Statement
// const age = 18;
// if (age >= 18) {
// 	console.log('Sara puede empezar a navegar');
// } else {
// 	const yearLeft = 18 - age;
// 	console.log(`Sara es muy joven, espera otros ${yearLeft} años`);
// }

// let birthyear = 2012;
// let century;
// if (birthyear <= 2000) {
// 	century = 20;
// } else {
// 	century = 21;
// }
// console.log(century);
//* END

// **Conversión and coerción
//! Conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //! Coercion
// console.log('I am ' + 23 + 'years old');
// console.log('23' - '10' - 3);
// console.log('23' / 2);
// // ** End Conversión and coerción

// let n = '1' + 1;

// n = n - 1;
// console.log(n);

//*Trully Values
// console.log('Truly and False-----');
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Mariana'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
// 	console.log("Don't spend it all;");
// } else {
// 	console.log('You should get a job!');
// }

// let height = 100;
// if (height) {
// 	console.log('YAY Heighyt is defined');
// } else {
// 	console.log('Height is Undefined');
// }
//**END Trully Values

// **Valores de igualdad
// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');

// if (age == 18) console.log('You just became an adult :D (loose)');

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
// 	// 22 === 23 -> FALSE
// 	console.log('Cool! 23 is an amzaing number!');
// } else if (favourite === 7) {
// 	console.log('7 is also a cool number');
// } else if (favourite === 9) {
// 	console.log('9 is also a cool number');
// } else {
// 	console.log('Number is not 23 or 7 or 9');
// }

// if (favourite !== 23) console.log('Why not 23?');

// **END Valores de igualdad

//**Logical Operators/
// const hasDrivenLicense = true;
// const hasGoodVision = true;

// console.log(hasDrivenLicense && hasGoodVision);
// console.log(hasDrivenLicense || hasGoodVision);
// console.log(!hasDrivenLicense);

// if (hasDrivenLicense && hasGoodVision) {
// 	console.log('Sara is able to drive');
// } else {
// 	console.log('Alguien mas tiene que manejar');
// }

// const isTired = false;
// console.log(hasDrivenLicense && hasGoodVision && isTired);

// if (hasDrivenLicense && hasGoodVision && !isTired) {
// 	console.log('Sara puede manejar');
// } else {
// 	console.log('Alguien más debe de manejar');
// }

//**END Logical Operators/
//** */ Switch Statement
const day = 'sunday';

// switch (day) {
// 	case 'monday': // day === 'monday'
// 		console.log('Plan course structure');
// 		console.log('Go to coding meetup');
// 		break;
// 	case 'tuesday':
// 		console.log('Prepare theory videos');
// 		break;
// 	case 'wednesday':
// 	case 'thursday':
// 		console.log('Write code examples');
// 		break;
// 	case 'friday':
// 		console.log('Record videos');
// 		break;
// 	case 'saturday':
// 	case 'sunday':
// 		console.log('Enjoy the weekend :D');
// 		break;
// 	default:
// 		console.log('Not a valid day!');
// }

// if (day === 'monday') {
// 	console.log('Plan course structure');
// 	console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
// 	console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
// 	console.log('Write code examples');
// } else if (day === 'friday') {
// 	console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
// 	console.log('Enjoy the weekend :D');
// } else {
// 	console.log('Not a valid day!');
// }

//** */ END Switch Statement
//** */   Statement and Expresions
// 3 + 4;
// 1991;
// true && false && !false;

// if (23 > 10) {
// 	const str = '23 is bigger';
// }

// const me = 'Jonas';
// console.log(`I'm ${2037 - 1991} years old ${me}`);
//** */ END  Statement and Expresions
// **The conditional Ternary
const age = 15;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

let drink2;
if (age >= 18) {
	drink2 = 'wine 🍷';
} else {
	drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

// **END The conditional Ternary
