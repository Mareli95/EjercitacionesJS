const data1 = [17, 20, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
	// Para que se pueda imprimir el string
	let str = '';
	for (var i = 0; i < arr.length; i++) {
		// console.log(arr[i]);
		str = str + `${arr[i]}°C in ${i + 1} days...`;
	}
	// Va afuera del for con tal de que no se imprima cada uno, si no todo el string completo.
	console.log(str);
}

printForecast(data1);
printForecast(data2);
