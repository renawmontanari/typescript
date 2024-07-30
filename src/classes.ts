interface IPerson {
  id: number;
  classe: string;
  sayMyName(): string;
}

class Person implements IPerson {
  readonly id: number;
  protected firstName: string;
  private age: number;
  classe: string;

  constructor(id: number, firstName: string, age: number, classe: string) {
    this.id = id;
    this.firstName = firstName;
    this.age = age;
    this.classe = classe;
  }

  sayMyName(): string {
    return this.firstName;  
  }
}

class Employee extends Person {
  constructor(id: number, name: string, age: number, classe: string) {
    super(id, name, age, classe);
  }

  whoAmI() {
    return this.firstName;
  }
}

const personWarrior = new Person(2, 'Alice', 45, 'Warrior');
const personMage = new Person(1, 'John', 56, 'Mage');
personMage.sayMyName();