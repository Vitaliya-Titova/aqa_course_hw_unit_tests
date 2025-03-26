class Employee {
  constructor(firstName, lastName, profession, salary) {
    (this.firstName = firstName), (this.lastName = lastName), (this.profession = profession), (this.salary = salary);
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

  get profession() {
    return this._profession;
  }
  set profession(profession) {
    if (!profession || typeof profession !== 'string' || profession.trim() === '') {
      throw new Error('profession must be a string');
    }
    if (/^[a-zA-Z ]+$/.test(profession)) {
      return (this._profession = profession);
    } else {
      throw new Error('profession must contain only Latin letters and spaces');
    }
  }

  get salary() {
    return this._salary;
  }
  set salary(salary) {
    if (!salary || typeof salary !== 'number' || salary < 0 || salary >= 10000) {
      throw new Error('salary must be a number greater than 0 and less than 10000');
    }
    return (this._salary = salary);
  }
}

class Company {
  #employees = [];
  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('Employee must be an instance of Employee');
    }
    return this.#employees.push(employee);
  }
  getEmployees() {
    return this.#employees;
  }

  findEmployeeByName(firstName) {
    const employee = this.#employees.find((elem) => elem.firstName === firstName);
    if (!employee) {
      throw new Error(`Employee with firstName ${firstName} not found`);
    }
    return employee;
  }

  getEmployeeIndex(firstName) {
    const resInd = this.#employees.findIndex((elem) => elem.firstName === firstName);
    if (resInd === -1) {
      throw new Error(`Employee with firstName ${firstName} not found`);
    }
    return resInd;
  }

  removeEmployee(firstName) {
    return this.#employees.splice(this.getEmployeeIndex(firstName), 1);
  }

  getTotalSalary() {
    return this.#employees.reduce((accun, elem) => {
      return accun + elem.salary;
    }, 0);
  }
}

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

const company = new Company();
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

//console.log('getEmployee', company.getEmployees());
//console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
console.log(company.getEmployeeIndex('Mark'));
console.log(company.removeEmployee('Mark'));
console.log(company.getEmployees()); // [Employee, Employee]
//console.log('getTotalSalary', company.getTotalSalary());
export { Employee, Company };
