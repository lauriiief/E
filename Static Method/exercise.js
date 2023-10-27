class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static fromObject(obj = {}) {
    let values = Object.values(obj);
    return new Person(values[0], values[1]);
  }
}

const obj = {
  firstName: "Mario",
  lastName: "Rossi",
};

const person = Person.fromObject(obj);
console.log(person.firstName + " " + person.lastName);
