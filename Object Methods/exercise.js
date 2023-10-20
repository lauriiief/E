const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}


let entries = Object.entries(person);

for (let entry of entries) {
    let [key, val] = entry;
    console.log(key + ':' + val);
}

// Print values of person using Object.keys

let keys = Object.keys(person);
let values = Object.values(person);

for (let i = 0; i < values.length; i+= 1) {
  console.log(keys[i] + ':' + values[i]);
}