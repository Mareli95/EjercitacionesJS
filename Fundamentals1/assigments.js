// // Values and variables
console.log('--------');
console.log('Assigments challenge');
console.log('--------');
const country = 'México';
const continent = 'América';
let population = 10;
console.log(country);
console.log(continent);
console.log(population);
// Data Types
const isIsland = false;

let language;

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);

// //* let, const, var
language = 'Español';
console.log(language);
// isIsland = true; // Se genera un error porque es una constante.
console.log(isIsland);
// //*END let, const, var

// //*Basic Operators
console.log('Basic Operators'); //
console.log(population / 2);
population++;
console.log(population);
let finland = 6;
console.log(population > finland); //;
averagePopulation = 33;
console.log(population < averagePopulation);

const description = `${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(description);

// //*End Basic Operators

// *Taking Decisions: if / else Statements
population = 13;
population = 130;
if (population > averagePopulation) {
	let mensaje = `${country} population is above average`;
	console.log(mensaje);
} else {
	let mensaje = `${country} population is ${averagePopulation - population} below average`;
	console.log(mensaje);
}

// * END Taking Decisions: if / else Statements
