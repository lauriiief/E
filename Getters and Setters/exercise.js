class Person {
    firstName = "";
    lastName = "";
    age = 0;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set age(newValue){
        if(newValue < 1) {
            this.age = 1;
        } else if (newValue > 110) {
            this.age = 110;
        } else {
            this.age = newValue;
        }

    }

    set firstName(newValue){
      if(newValue === 'string'){
        this.firstName = newValue;
      } else {
        return "Add a valid name"
      }
    }

    set lastName(newValue){
      if(newValue === 'string'){
        this.lastName = newValue;
      } else {
        return "Add a valid last name"
      }
    }

    get age() {
        return this.age;
    }

    get firstName() {
      return this.firstName;
    }

    get lastName() {
      return this.lastName;
    }

    get fullName() {
      return this.firstName + " " + this.lastName;
    }
}


const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);