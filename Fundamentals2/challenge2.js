// **Challenge 1
// const calcAverage = (score1, score2, score3) => {
// 	const average = (score1 + score2 + score3) / 3;
// 	return average;
// };

// const averageDophin1 = console.log('Average Dolphin 1', calcAverage(44, 23, 71));
// const averageKoala1 = console.log('Average Koala 1', calcAverage(65, 54, 49));
// const averageDophin2 = console.log('Average Dolphin 2', calcAverage(85, 54, 71));
// const averageKoala2 = console.log('Average Koala 2', calcAverage(23, 34, 27));

// function checkWinner(avgDolphin, avgKoala) {
// 	if (avgDolphin >= avgKoala * 2) {
// 		console.log(`Dolphins win (${avgDolphin} vs ${avgKoala})`);
// 	} else if (avgKoala >= avgDolphin * 2) {
// 		console.log(`Koala win (${avgKoala} vs ${avgDolphin})`);
// 	} else {
// 		console.log('No se cumplen las reglas');
// 	}
// }

// checkWinner(averageDophin1, averageKoala1);
// checkWinner(averageDophin2, averageKoala2);
// checkWinner(111, 571);

// // ** Challenge 2'
// function calcTip(bill) {
// 	if (bill >= 50 && bill <= 300) {
// 		const tip = bill * 0.15;
// 		return tip;
// 	} else {
// 		const tip = bill * 0.2;
// 		return tip;
// 	}
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(tips);

// **Challenge 3

// const mark = {
// 	fullName: 'Mark Miller',
// 	mass: 78,
// 	height: 1.69,

// 	calcBMI: function () {
// 		this.BMI = this.mass / this.height ** 2;
// 		return this.BMI;
// 	},
// };

// const jonh = {
// 	fullName: 'Jonh Smith',
// 	mass: 92,
// 	height: 1.95,

// 	calcBMI: function () {
// 		this.BMI = this.mass / this.height ** 2;
// 		return this.BMI;
// 	},
// };

// console.log(mark.calcBMI());
// console.log(jonh.calcBMI());

// if (mark.BMI > jonh.BMI) {
// 	console.log(`${mark.fullName} BMI (${mark.BMI}) is higher than ${jonh.fullName} ${jonh.BMI}`);
// } else if (jonh.BMI > mark.BMI) {
// 	console.log(`${jonh.fullName} BMI (${jonh.BMI}) is higher than ${mark.fullName} ${mark.BMI}`);
// }

// **Challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

// Con If normal
// function calcTip(bill) {
// 	if (bill >= 50 && bill <= 300) {
// 		let tip = bill * 0.15;
// 		return tip;
// 	} else {
// 		let tip = bill * 0.2;
// 		return tip;
// 	}
// }

// Con if ternario
const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
	const tip = calcTip(bills[i]);
	// console.log(tip);
	tips.push(tip);
	const total = tip + bills[i];
	totals.push(total);
}

console.log(bills, tips, totals);

function calcAverage(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	let average = sum / arr.length;
	return average;
}

console.log(calcAverage(totals));
