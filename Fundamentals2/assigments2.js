//LECTURE: Functions
// function describeCountry(country, population, capitalCity) {
// 	console.log(`${country} has ${population} people and its capital city is ${capitalCity}`);
// }

// describeCountry('Mexico', 30, 'Ciudad de México');
// describeCountry('Findandia', 30, 'Helsinki');

// *LECTURE: Function Declarations vs. Expressions
function percentageOfWorld1(population) {
	const worldPopulation = 7900;
	const percentage = (population * 100) / worldPopulation;
	return percentage;
}

// console.log(percentageOfWorld(1441));

// const percentageOfWorld2 = function (population) {
// 	const worldPopulation = 7900;
// 	const percentage = (population * 100) / worldPopulation;
// 	return percentage;
// };

// console.log(percentageOfWorld2(1441));

//  *Lecture Arrow Functions **
// const percentageOfWorld3 = (population) => {
// 	const worldPopulation = 7900;
// 	const percentage = (population * 100) / worldPopulation;
// 	return percentage.toFixed(2);
// };
// console.log(percentageOfWorld3(1441));

// ** LECTURE: Functions Calling Other Functions

// const describePopulation = function (country, population) {
// 	const percentage = percentageOfWorld(population);
// 	return `${country} has ${population} million people which is about ${percentage.toFixed(2)}% of the world`;
// };

// console.log(describePopulation('China', 1441));

// **LECTURE: Introduction to Arrays

// const populations = [1441, 220, 800, 500];
// const percentages = [];
// console.log(populations);

// for (let i = 0; i < populations.length; i++) {
// 	const percentage = percentageOfWorld(populations[i]);
// 	percentages.push(percentage);
// }
// console.log(percentages);

// *LECTURE: Basic Array Operations (Methods)

const neighbours = ['México', 'Cánada', 'Perú', 'Brazil'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

// if (!neighbours.includes('Alemania')) {
// 	console.log('Probablemente no esta en Alemania');
// }

// neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden';
// console.log(neighbours);

const myCountry = {
	country: 'Mexico',
	population: 10,
	capital: 'Ciudad de Mexico',
	lenguaje: 'Español',
	neighbours: ['Canada', 'USA'],
	describe: function () {
		console.log(
			`${this.country} tiene ${this.population} millones de habitantes, se habla ${this.lenguaje}  , su capital es ${this.capital}, y tiene  ${this.neighbours.length} vecinos.`
		);
	},
	checkIsIsland: function () {
		this.island = this.neighbours === 0 ? true : false;
	},
};

// console.log(
// 	`${myCountry.country} tiene ${myCountry.population} millones de habitantes, se habla ${myCountry.lenguaje}, su capital es ${myCountry.capital}, y tiene ${myCountry.vecinos.length} vecinos.`
// );

// myCountry.population = myCountry.population + 2;
// console.log('Dot Notation', myCountry);
// myCountry['population'] = myCountry['population'] - 1;
// console.log(myCountry);

//**LECTURE: Object Methods
myCountry.describe();
myCountry.checkIsIsland();

// console.log(myCountry);
//** */ LECTURE: Iteration: The for Loop
// for (let i = 0; i <= 50; i++) {
// 	console.log(`Voter number: ${i} is currently voting`);
// }

// **LECTURE: Looping Arrays, Breaking and Continuing
// const populations = [1441, 220, 800, 500];
// const percentages = [];
// console.log(populations);

// for (let i = 0; i < populations.length; i++) {
// 	const percentage = percentageOfWorld(populations[i]);
// 	percentages.push(percentage);
// }
// console.log(percentages);

// **LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
	for (let j = 0; j < listOfNeighbours[i].length; j++) {
		console.log(`Vecino ${listOfNeighbours[i][j]}`);
	}
}

const amigos = [['Ana', 'Cristina', ['Mariana'], ['Monica', 'Ilse', 'Sofi']]];

for (let i = 0; i < amigos.length; i++) {
	for (let j = 0; j < amigos[i].length; j++) {
		console.log(`Amigos ${amigos[i][j]}`);
	}
}

const populations = [1441, 220, 800, 500];
const percentages3 = [];
let i = 0;
while (i < populations.length) {
	const perc = percentageOfWorld1(populations[i]);
	percentages3.push(perc);
	i++;
}
console.log(percentages3);
