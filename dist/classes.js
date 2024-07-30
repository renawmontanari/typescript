"use strict";
class Person {
    constructor(id, firstName, age, classe) {
        this.id = id;
        this.firstName = firstName;
        this.age = age;
        this.classe = classe;
    }
    sayMyName() {
        return this.firstName;
    }
}
class Employee extends Person {
    constructor(id, name, age, classe) {
        super(id, name, age, classe);
    }
    whoAmI() {
        return this.firstName;
    }
}
const personWarrior = new Person(2, 'Alice', 45, 'Warrior');
const personMage = new Person(1, 'John', 56, 'Mage');
personMage.sayMyName();
