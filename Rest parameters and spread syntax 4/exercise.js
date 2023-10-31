//function sum(array) {
//  return array.reduce((a,b) => a + b);
//}

//const numbers = [1, 2, 3];
//console.log(sum(numbers));

function sum([...arr]) {
  return arr.reduce((a, b) => a + b);
}

const numbers = [1, 2, 3];
console.log(sum(numbers));