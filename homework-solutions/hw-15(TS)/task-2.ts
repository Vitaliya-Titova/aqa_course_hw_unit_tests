// Создайте интерфейс IPerson, абстрактный класс Employee, который реализует интерфейс IPerson,
//  и конкретные классы Manager и Developer.
//   - Интерфейс IPerson должен содержать:
//       Стринговые поля: name, surname
//       Намберовые поля: experienceYears
//       Метод, возвращающий строку: getDetails().
interface IPerson {
  name: string;
  surname: string;
  experienceYears: number;
  getDetails(): string;
}
//   - Абстрактный класс Employee должен:
//       Имплементировать интерфейс IPerson.
//       Содержать защищенное (protected) поле: salary, не передающееся в конструктор (по дефолту 0)
//       Содержать защищенный (protected) абстрактный метод: calculateSalary().,
//         который считает зарплату и вызывается в конструкторе, и будет реализован в наследниках
//       Метод calculateSalary() должен быть использован в конструкторе

abstract class Employee implements IPerson {
  protected salary: number = 0;
  constructor(
    public name: string,
    public surname: string,
    public experienceYears: number,
  ) {
    this.salary = this.calculateSalary();
  }
  public abstract calculateSalary(): number;
  public abstract getDetails(): string;
}

//   - Конкретные классы Manager и Developer должны:
//       Наследоваться от Employee.
//       Класс менеджер должен на конструкторе получать поле prefered, которое может быть только 'scrum' или 'kanban'
//       Класс девелопер должен на конструкторе получать поле programmingLanguage, который может быть 'js', 'ts', 'java', 'python'
//       Метод calculateSalary должен для менеджера устанавливать зарплату по формуле: количество лет опыта * 500
//       Метод calculateSalary должен для девелопера устанавливать зарплату по формуле: количество лет опыта * 1000
//       Реализовывать метод getDetails(), который должен выводить полную информацию об объекте вида:
//         'My name is Elena TSovna, I am software developer with 6 years of experience in TypeScript and 6000$ salary' (пример для девелопера)
type preferedType = 'scrum' | 'kanban';
type programmingLanguageType = 'js' | 'ts' | 'java' | 'python';

class Manager extends Employee {
  constructor(
    public name: string,
    public surname: string,
    public experienceYears: number,
    public prefered: preferedType,
  ) {
    super(name, surname, experienceYears);
  }
  calculateSalary() {
    return this.experienceYears * 500;
  }
  getDetails() {
    return `My name is ${this.name} ${this.surname}, I am Manager with ${this.experienceYears} years of experience in ${this.prefered} and ${this.salary}$ salary`;
  }
}

const manager1 = new Manager('Vita', 'Tsitova', 6, 'kanban');
console.log(manager1);
console.log(manager1.calculateSalary());
console.log(manager1.getDetails());

class Developer extends Employee {
  constructor(
    public name: string,
    public surname: string,
    public experienceYears: number,
    public programmingLanguage: programmingLanguageType,
  ) {
    super(name, surname, experienceYears);
  }
  calculateSalary() {
    return this.experienceYears * 1000;
  }
  getDetails() {
    return `My name is ${this.name} ${this.surname}, I am Developer with ${this.experienceYears} years of experience in ${this.programmingLanguage} and ${this.salary}$ salary`;
  }
}
const developer1 = new Developer('Pasha', 'Titov', 5, 'js');
console.log(developer1);
console.log(developer1.calculateSalary());
console.log(developer1.getDetails());
