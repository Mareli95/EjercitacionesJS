// Challenge 1
// const markMass = 95;
// const markHeight = 1.88;

// const jonhMass = 85;
// const jonhHeight = 1.76;

// const markBMI = markMass / markHeight ** 2;
// const jonhBMI = jonhMass / jonhHeight ** 2;

// const markHigherBMI = markBMI > jonhBMI;

// console.log('Masa corporal Mark' + ' ' + markBMI);
// console.log('Masa corporal Jonh' + ' ' + jonhBMI);
// console.log('Resultado', markHigherBMI);
// **END

//** */ Challenge 2
// const markMass = 78;
// const markHeight = 1.69;
// const jonhMass = 92;
// const jonhHeight = 1.95;

// // const markMass = 95;
// // const markHeight = 1.88;
// // const jonhMass = 85;
// // const jonhHeight = 1.76;

// const markBMI = markMass / markHeight ** 2;
// const jonhBMI = jonhMass / jonhHeight ** 2;

// if (markBMI > jonhBMI) {
// 	let mensaje = `Mark´s BMI (${markBMI}) is higher than Jonh (${jonhBMI})`;
// 	console.log(mensaje);
// } else {
// 	let mensaje = `Jonh´s BMI (${jonhBMI}) is higher than Mark´s (${markBMI})`;
// 	console.log(mensaje);
// }
// **END

// **Challenge 3
// averageDolphin = (96 + 108 + 89) / 3;
// averageKoala = (88 + 91 + 110) / 3;

// // Bonus 1
// console.log(averageDolphin, averageKoala);

// if (averageDolphin > averageKoala) {
// 	console.log('Dolphin Wins');
// } else if (averageKoala > averageDolphin) {
// 	console.log('Koala Wins');
// } else if (averageKoala === averageDolphin) {
// 	console.log('Empate');
// }

// averageDolphin = (97 + 112 + 101) / 3;
// averageKoala = (109 + 95 + 106) / 3;
// console.log(averageDolphin, averageKoala);

// if (averageDolphin > averageKoala && averageDolphin >= 100) {
// 	console.log('Dolphin Wins 🏆');
// } else if (averageKoala > averageDolphin && averageKoala >= 100) {
// 	console.log('Koala Wins');
// } else if (averageDolphin === averageKoala && averageDolphin >= 100 && averageKoala >= 100) {
// 	console.log('Empate');
// } else {
// 	console.log('Nadie Gana');
// }
// **END

// **Challenge 4
console.log('Challenge 4');

const bill = 40;
// const bill = 40;
// const bill = 30;

const tip = bill <= 300 && bill >= 50 ? bill * 1.15 : bill * 1.2;
console.log(`The bill was ${bill}, the tip was ${tip - bill}, and the total value is ${tip}`);

// **END
