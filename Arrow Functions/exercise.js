
const arrowSum = (a, b) => a + b;

const arrowSubtract = (a, b) => a - b;

const arrowMultiply = (a, b) => a * b;

const arrowDivide = (a, b) => a / b;

const log = function (value) {
  console.log(value);
}

// EXERCISE: 

let arrowfunc = (arg1, arg2, arg3) => ((arg1 + arg2) * (arg3 + arg1) - arg1) / arg3;
console.log(arrowfunc(2,4,5));

console.log(arrowDivide(arrowSubtract(arrowMultiply(arrowSum(4,2), arrowSum(5,2)), 2),5));