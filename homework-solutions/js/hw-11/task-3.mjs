class Employee {
  #salary;
  constructor(firstName, lastName, salary) {
    (this.firstName = firstName), (this.lastName = lastName), (this.#salary = salary);
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(firstName) {
    if (!firstName || typeof firstName !== 'string') {
      throw new Error('firstName must be a string');
    } else if (firstName.length < 2 || firstName.length > 50) {
      throw new Error('Length of firstName must be from 2 to 50');
    }
    if (/^[a-zA-Z ]+$/.test(firstName)) {
      return (this._firstName = firstName);
    } else throw new Error('Latin letters only');
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    if (!lastName || typeof lastName !== 'string') {
      throw new Error('lastName must be a string');
    } else if (lastName.length < 2 || lastName.length > 50) {
      throw new Error('Length of lastName must be from 2 to 50');
    }
    if (/^[a-zA-Z]+$/.test(lastName)) {
      return (this._lastName = lastName);
    } else throw new Error('Latin letters only');
  }

  get salary() {
    return this.#salary;
  }
  set salary(salary) {
    if (!salary || typeof salary !== 'number' || salary < 0 || salary >= 10000) {
      throw new Error('salary must be a number greater than 0 and less than 10000');
    }
    return (this.#salary = salary);
  }
  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

class Developer extends Employee {
  constructor(firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, salary);
    this.programmingLanguages = programmingLanguages;
  }
  addProgrammingLanguage(language) {
    if (!language || typeof language !== 'string') {
      throw new Error(`language  not a string`);
    }
    return this.programmingLanguages.push(language);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, salary, teamSize) {
    super(firstName, lastName, salary);
    this.teamSize = teamSize;
  }

  increaseTeamSize() {
    this.teamSize++;
  }
}

class Designer extends Employee {
  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, salary);
    this.designTools = designTools;
  }
  addDesignTool(tool) {
    if (!tool || typeof tool !== 'string') {
      throw new Error(`tool  not a string`);
    }
    return this.designTools.push(tool);
  }
}

class Company {
  #employees = [];
  professionName = [];

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('employees must be an instance of Employee');
    }
    const sameName = this.#employees.find((elem) => elem.firstName === employee.firstName);
    if (sameName) {
      throw new Error(`Employee with firstName ${employee.firstName} has already exist`);
    }
    return this.#employees.push(employee);
  }

  getEmployees() {
    return this.#employees;
  }

  //Массив профессий сотрудников
  getAllProfession() {
    const allProff = this.#employees.map((elem) => elem.constructor.name);
    const uniqueProfession = [...new Set(allProff)];
    return uniqueProfession;
  }

  getEmployeesByProfession(profession) {
    return this.#employees.filter((elem) => elem.constructor.name === profession);
  }
}

const emp1 = new Employee('John', 'Doe', 3000);
console.log(emp1);
console.log(emp1.getFullName());
const dev1 = new Developer('Ivan', 'Ivanov', 500, ['Java', 'JS']);
const dev2 = new Developer('Peter', 'Petrov', 1500, ['JavaScript', 'Angular']);
const man1 = new Manager('Olga', 'Swan', 100, 4);
const des1 = new Designer('Maria', 'Bob', 1000, []);
dev1.addProgrammingLanguage('C++');
dev1.addProgrammingLanguage('Node');
console.log('dev1', dev1);
des1.addDesignTool('Figma');
console.log('des1', des1);

const company = new Company();
company.addEmployee(emp1);
company.addEmployee(dev1);
company.addEmployee(dev2);
company.addEmployee(man1);
company.addEmployee(des1);
console.log(company.getEmployees());
console.log('Professions', company.getAllProfession());
console.log(company.getEmployeesByProfession('Developer'));
console.log(company.getEmployeesByProfession('Producer'));
console.log('man1', man1);
man1.increaseTeamSize();
 console.log('increaseTeamSize man1', man1);


export { Employee, Company, Designer, Developer, Manager };

//static
class QA extends Employee {
  static qaAll = [];
  constructor(firstName, lastName, salary, teamSize) {
    super(firstName, lastName, salary);
    this.teamSize = teamSize;
  }
  static addQA(QA) {
    if (!(QA instanceof Employee)) {
      throw new Error('QA must be an instance of Employee');
    }
    return this.qaAll.push(QA);
  }

  static getQA() {
    return QA.qaAll;
  }

  static sumTeamSize() {
    return QA.qaAll.reduce((acc, elem) => {
      return acc + elem.teamSize;
    }, 0);
  }

  static increaseTeamSize() {
    QA.qaAll.map((elem) => (elem.teamSize += 1));
    return QA.qaAll;
  }
}
const qa1 = new QA('Boris', 'John', 1200, 35);
const qa2 = new QA('Nastya', 'JQ', 120, 5);
QA.addQA(qa1);
QA.addQA(qa2);
console.log(QA.getQA());
console.log(QA.sumTeamSize());
console.log(QA.increaseTeamSize());
