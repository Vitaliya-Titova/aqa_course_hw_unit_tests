class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(firstName) {
    if (!firstName || typeof firstName !== 'string') {
      throw new Error('firstName must be a string');
    }
    this._firstName = firstName;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    if (!lastName || typeof lastName !== 'string') {
      throw new Error('lastName must be a string');
    }
    this._lastName = lastName;
  }
  get profession() {
    return this._profession;
  }
  set profession(profession) {
    if (!profession || typeof profession !== 'string') {
      throw new Error('profession must be a string');
    }
    this._profession = profession;
  }
  get salary() {
    return this.#salary;
  }
  set salary(salary) {
    if (!salary || typeof salary !== 'number' || salary < 0) {
      throw new Error('salary must be a number');
    }
    this.#salary = salary;
  }
  // get fullName() {
  //   return `${this.firstName} ${this.lastName}`;
  // }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  #employees = [];
  constructor(title, phone, address) {
    (this.title = title), (this.phone = phone), (this.address = address);
  }
  get title() {
    return this._title;
  }
  set title(title) {
    if (!title || typeof title !== 'string') {
      throw new Error('title must be a string');
    }
    this._title = title;
  }
  get phone() {
    return this._phone;
  }
  set phone(phone) {
    if (!phone || typeof phone !== 'number') {
      throw new Error('phone must be a number');
    }
    this._phone = phone;
  }
  get address() {
    return this._address;
  }
  set address(address) {
    if (!address || typeof address !== 'string') {
      throw new Error('address must be a string');
    }
    this._address = address;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('employees must be a array');
    }
    return this.#employees.push(employee);
  }
  getEmployees() {
    return this.#employees;
  }
  getInfo() {
    let countEmp = company.getEmployees().length;
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${countEmp}`;
  }
}

const company = new Company('Tech Corp', 123456, 'Main Street');
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
const emp3 = new Employee('Vita', 'Ivanova', 'QA', 5000);
console.log('func emp1', company.addEmployee(emp1));
console.log('func emp2', company.addEmployee(emp2));

console.log(emp1.firstName); // "John"
emp1.salary = 3100;
console.log(emp1.salary); // 3100
console.log(emp1.fullName);
console.log(emp3.getFullName());
console.log(emp3.profession);

console.log('getEmployee', company.getEmployees()); // [Employee, Employee]

console.log('get info', company.getInfo());
export { Employee, Company };
