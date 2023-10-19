const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
//person2.firstName = "Simon";

//In order to change only the second object, we need to use the method Object.assign()

let person3 = Object.assign({}, person1);
person3.firstName = "Simon";

console.log(person1);
console.log(person2);
console.log(person3);



