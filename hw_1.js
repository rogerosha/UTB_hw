let n = 27;

let xNoiseFirstBeg = Math.pow(10, 0.3 * ((80 + n) - 60) / 10);
let xNoiseFirstEnd = Math.pow(10, 0.3 * ((70 + n) - 60) / 10);
let xDustFirstBeg = 0.55 * ((20 + n) / 5);
let xDustFirstEnd = 0.55 * ((15 + n) / 5);
let xGoodFirstBeg = 0.194 * Math.pow(15, 1.45);
let xGoodFirstEnd = 0.194 * Math.pow(10, 1.45);
let xCurrentFirstBeg = Math.pow(80, 3.5) * Math.pow(10, -5);
let xCurrentFirstEnd = Math.pow(70, 3.5) * Math.pow(10, -5);

let xNoiseSecondBeg = Math.pow(10, 0.3 * ((50 + n) - 70) / 10);
let xNoiseSecondEnd = Math.pow(10, 0.3 * ((50 + n) - 60) / 10);
let xGoodSecondBeg = 0.194 * Math.pow(15 + n, 1.45);
let xGoodSecondEnd = 0.194 * Math.pow(10 + n, 1.45);
let xCurrentSecondBeg = Math.pow(70, 3.5) * Math.pow(10, -5);
let xCurrentSecondEnd = Math.pow(50, 3.5) * Math.pow(10, -5);
let xTemperatureSecondBeg = -0.333 * -10; 
let xTemperatureSecondEnd = -0.333 * -5;

let jBeg = xNoiseFirstBeg * (50 + n) + xDustFirstBeg * (30 + n) + xGoodFirstBeg *  10 + xCurrentFirstBeg * (3 + n) + xNoiseSecondBeg * 30 + xGoodSecondBeg * (20 + n) + xCurrentSecondBeg * (5 + n) + xTemperatureSecondBeg * n;
let jEnd = xNoiseFirstEnd * (50 + n) + xDustFirstEnd * (30 + n) + xGoodFirstEnd *  10 + xCurrentFirstEnd * (3 + n) + xNoiseSecondEnd * 30 + xGoodSecondEnd * (20 + n) + xCurrentSecondEnd * (5 + n) + xTemperatureSecondEnd * n;

delta = (jBeg - jEnd)/jBeg * 100;

console.log('Значение Х');

console.log('Цех 1:');
console.log('Шум начальное =', xNoiseFirstBeg);
console.log('Шум конечное =', xNoiseFirstEnd);
console.log('Пыль начальное =', xDustFirstBeg);
console.log('Пыль конечное =', xDustFirstEnd);
console.log('Перемещаемый груз начальное =', xGoodFirstBeg);
console.log('Перемещаемый груз конечное =', xGoodFirstEnd);
console.log('Ток начальное =', xCurrentFirstBeg);
console.log('Ток конечное =', xCurrentFirstEnd);

console.log('Цех 2:');
console.log('Шум начальное =', xNoiseSecondBeg);
console.log('Шум конечное =', xNoiseSecondEnd);
console.log('Перемещаемый груз начальное =', xGoodSecondBeg);
console.log('Перемещаемый груз конечное =', xGoodSecondEnd);
console.log('Ток начальное =', xCurrentSecondBeg);
console.log('Ток конечное =', xCurrentSecondEnd);
console.log('Температура начальное =', xTemperatureSecondBeg);
console.log('Температура конечное =', xTemperatureSecondEnd);

console.log('j начальное =', jBeg);
console.log('j конечное =', jEnd);

console.log('△ =', delta)
