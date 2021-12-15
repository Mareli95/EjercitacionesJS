const markMass = 95;
const markHeight = 1.88;

const jonhMass = 85;
const jonhHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const jonhBMI = jonhMass / jonhHeight ** 2;

const markHigherBMI = markBMI > jonhBMI;

console.log('Masa corporal Mark' + ' ' + markBMI);
console.log('Masa corporal Jonh' + ' ' + jonhBMI);
console.log('Resultado', markHigherBMI);
