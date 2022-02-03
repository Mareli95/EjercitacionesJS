//**Values and variables
// console.log('--------');
// console.log('Assigments challenge');
// console.log('--------');
// const country = 'México';
// const continent = 'América';
// let population = 10;
// console.log(country);
// console.log(continent);
// console.log(population);
// // Data Types
// const isIsland = false;

// let language;

// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof population);
// console.log(typeof isIsland);

// //* let, const, var
// language = 'Español';
// console.log(language);
// // isIsland = true; // Se genera un error porque es una constante.
// console.log(isIsland);
// //*END let, const, var

// //*Basic Operators
// console.log('Basic Operators'); //
// console.log(population / 2);
// population++;
// console.log(population);
// let finland = 6;
// console.log(population > finland); //;
// averagePopulation = 33;
// console.log(population < averagePopulation);

// const description = `${country} is in ${continent} and its ${population} million people speak ${language}`;
// console.log(description);

// //*End Basic Operators

// *Taking Decisions: if / else Statements
// population = 13;
// population = 130;
// if (population > averagePopulation) {
// 	let mensaje = `${country} population is above average`;
// 	console.log(mensaje);
// } else {
// 	let mensaje = `${country} population is ${averagePopulation - population} below average`;
// 	console.log(mensaje);
// }

// * END Taking Decisions: if / else Statements
//*Type Conversion and Coercion
// console.log('Coercion and Conversión-----');

// let n = '9' - '5';
// let n1 = '19' - '13' + '17';
// let n2 = '19' - '13' + 17;
// let n3 = '123' < 57;
// let n4 = 5 + 6 + '4' + 9 - 4 - 2;

// console.log(n, n1, n2, n3, n4);
// *End

// **LECTURE: Equality Operators: == vs. ===
// console.log('===');
// const numNeighbors = prompt('How many neighbour countries does your country have?');

// if (Number(numNeighbors) === 1) {
// 	console.log('Only 1 border');
// } else if (Number(numNeighbors) > 1) {
// 	console.log('More than one border');
// } else {
// 	1;
// 	console.log('No borders');
// }
// **END

// **LECTURE: Logical Operators
// const country = 'Mexico';
// const language = 'Español';
// let population = 10;
// let isIsland = false;

// if (language === 'Ingles' && population < 50 && !isIsland) {
// 	console.log(`You should live in ${country}`);
// } else {
// 	console.log(`${country} does not meet your criteria`);
// }

// **END

// *LECTURE: The switch Statement
// const language = 'english';

// switch (language) {
// 	case 'chinese':
// 	case 'mandarin':
// 		console.log('MOST number of native speakers');
// 		break;

// 	case 'spanish':
// 		console.log('2nd place in number of native speakers');
// 		break;
// 	case 'english':
// 		console.log('3er Place');
// 		break;
// 	case 'hindi':
// 		console.log('Number 4');
// 		break;
// 	case 'arabic':
// 		console.log('5th most spoken');
// 		break;
// 	default:
// 		console.log('Great language too :D');
// }

// *END

// *LECTURE: The Conditional (Ternary) Operator
const country = 'Mexico';
const population = 130;

population > 33
	? console.log(`${country} population is above average`)
	: console.log(`${country} population is below average`);
//*END
