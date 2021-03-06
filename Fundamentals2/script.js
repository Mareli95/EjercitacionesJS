'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

//** Functions */
// function logger() {
// 	console.log('Mi nombre es Mariana');
// }
// // Invocar una función
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
// 	const juice = `Juice with ${apples} and ${oranges} oranges`;
// 	return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const orangeJuice = fruitProcessor(6, 10);
// console.log(orangeJuice);
//** END */

// **Fuction Declaration vs Function Expression
// Fuction Declaration
// function calcAge(birthYear) {
// 	return 2032 - birthYear;
// }
// const age1 = calcAge(1995);

// // Function Expression
// const calcAge2 = function (birthYear) {
// 	return 2032 - birthYear;
// };

// const age2 = calcAge(1995);

// console.log(age1, age2);
// ** END

// ** Arrow Functions **
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1995);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
// 	const age = 2037 - birthYear;
// 	const retirement = 65 - age;
// 	return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearUntilRetirement(1995, 'Mariana'));
// console.log(yearUntilRetirement(1993, 'Luis'));

// ** END Arrow Functions **

// ** Functions calling other funtions
// const cutPieces = function (fruit) {
// 	return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {
// 	const applePieces = cutPieces(apples);
// 	const orangePieces = cutPieces(oranges);
// 	const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;

// 	return juice;
// }

// console.log(fruitProcessor(2, 3));

// ** END

// **Reviewing Functions
// const calcAge = function (birthYeah) {
// 	return 2037 - birthYeah;
// };

// const yearsUntilRetirement = function (birthYeah, firstName) {
// 	const age = calcAge(birthYeah);
// 	const retirement = 65 - age;

// 	if (retirement > 0) {
// 		console.log(`${firstName} retires in ${retirement} years`);
// 		return retirement;
// 	} else {
// 		console.log(`${firstName} has already retired 🎉`);
// 		return -1;
// 	}
// };

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));
// ** END

// ** Array
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice']

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// // Exercise
// const calcAge = function (birthYeah) {
// 	return 2037 - birthYeah;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);
// **END

// **Basic Array Methods
// const friends = ['Michael', 'Steven', 'Peter'];

// // Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
// 	console.log('You have a friend called Steven');
// }

// ** END
// Introduction to Objects
// const jonasArray = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven']];

// const jonas = {
// 	firstName: 'Jonas',
// 	lastName: 'Schmedtmann',
// 	age: 2037 - 1991,
// 	job: 'teacher',
// 	friends: ['Michael', 'Peter', 'Steven'],
// };
// **END

// **Dot vs Bracket Notation
// const jonas = {
// 	firstName: 'Jonas',
// 	lastName: 'Schmedtmann',
// 	age: 2037 - 1991,
// 	job: 'teacher',
// 	friends: ['Michael', 'Peter', 'Steven'],
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // const interstedIn = prompt('What do you want about Jonas, Chooose between name, lastname, age, job, and friends');
// // // console.log(jonas[interstedIn]);

// // if (jonas[interstedIn]) {
// // 	console.log(interstedIn);
// // } else {
// // 	console.log('Wrong request: Choose between name, lastname, age, job');
// // }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmendman';
// console.log(jonas);

// // Jonas has 3 friends, and his bes friend is called Michael.
// console.log(
// 	`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

// **END
// **Object methods **
// const jonas = {
// 	firstName: 'Jonas',
// 	lastName: 'Schmedtmann',
// 	birthYeah: 1991,
// 	job: 'teacher',
// 	friends: ['Michael', 'Peter', 'Steven'],
// 	hasDriversLicense: true,

// 	// calcAge: function (birthYeah) {
// 	//   return 2037 - birthYeah;
// 	// }

// 	// calcAge: function () {
// 	// 	// console.log(this);
// 	// 	return 2037 - this.birthYeah;
// 	// },

// 	calcAge: function () {
// 		this.age = 2037 - this.birthYeah;
// 		return this.age;
// 	},

// 	getSummary: function () {
// 		return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${
// 			this.hasDriversLicense ? 'a' : 'no'
// 		} driver's license.`;
// 	},
// };

// console.log(jonas.getSummary());
// **END

// **Itineration loops
// for (let rep = 1; rep <= 5; rep++) {
// 	console.log(`Levantamiento de pesas ${rep} 🏋️‍♂️`);
// }
// **END

//**Loopin arrays, breaking and continuing */
// const jonas = ['Mariana', 'Rubio', 2037 - 1995, 'Engineer', ['Monica', 'Ilse', 'Sofi'], true];
// const types = [];
// for (let i = 0; i < jonas.length; i++) {
// 	console.log(jonas[i]);

// 	// Filling ans array
// 	types[i] = typeof jonas[i];
// }
// console.log(types);

// const years = [1995, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
// 	ages.push(2023 - years[i]);
// }
// console.log(ages);
// ** END

// **Looping Backwards and Loops in Loops
// const jonas = ['Mariana', 'Rubio', 2037 - 1995, 'Engineer', ['Monica', 'Ilse', 'Sofi']];

// for (let i = jonas.length - 1; i >= 0; i--) {
// 	console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 6; exercise++) {
// 	console.log(`-- Empezando ejercio ${exercise}`);

// 	for (let rep = 1; rep < 6; rep++) {
// 		console.log(`Ejercicio ${exercise}: Liftig weight repetition ${rep} 🏋️‍♂️`);
// 	}
// }

// ** END

// ** While Loops
// for (let rep = 1; rep <= 10; rep++) {
// 	console.log(`Levantamiento de pesas ${rep} 🏋️‍♂️`);
// }

// let rep = 1;
// while (rep <= 10) {
// 	console.log(`While: Levantamiento de pesas ${rep} 🏋️‍♂️`);
// 	rep++;
// }
let dice = Math.trunc(Math.random() * 6 + 1);
console.log(dice);

while (dice !== 6) {
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6 + 1);
	if (dice === 6) console.log('El ciclo esta por terminar...');
}
// ** End
