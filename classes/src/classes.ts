// Private attributes are only accessible in the class they are defined
// Protected keyword makes attributes available to access in any inherited class
// Static methods/variables can be used without instantiating a class
// Therefore static methods/variables cannot be accessed inside the class unless called with className.method/var


// Abstract classes cannot be instantiated by themselves
// Abstract classes are there to provide inheritance implementation to children classes
// Methods marked as abstract will need to be defined in each child class
abstract class Department {
  // private name: string;
  static fiscalYear = 2024
  protected employees: string[] = [];
  // readonly introduced by typescript
  // readonly can be used once during intiailization and cannot be reassigned
  constructor(protected readonly id: string, name: string) {
    console.log(Department.fiscalYear)
    // this.name = n
  }

  static createEmployee(name:string){
    return {name:name}
  }

  abstract describe(this: Department): void


  addEmployee(employee:string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}
// extends keyword is used for inheritance
class ITDepartmnet extends Department {
  admins: string[]
  constructor(id:string, admins: string[]) {
    super(id, 'IT');     // super keyword is used in inheriting class. it calls the basis of the parent class 
    this.admins = admins    // super keyword must precede any this attributes
  }

  describe(this: Department): void {
    console.log(`IT Department - ID: ` + this.id)
  }
}

class AccountingDepartment extends Department {
  describe(this: Department): void {
    throw new Error("Method not implemented.");
  }
  // getters and setters
  private lastReport: string;

  constructor(id:string, private reports:string[]) {
    super(id, 'Accounting')
    this.lastReport = reports[0]
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error('No report found')
  }

  set mostReceptReport(value:string) {
    if (!value) {
      throw new Error ('Pass in valid value')
    }
    this.addReports(value)
  }

  addEmployee(name:string) {
    if (name === 'Max') {
      return
    }
    this.employees.push(name)
  }

  addReports(text:string) {
    this.reports.push(text)
    this.lastReport = this.reports[this.reports.length-1]
  }

  printReports() {
    console.log(this.reports)
  }
}

const itDept = new ITDepartmnet('1',['Max'])

const employee1 = Department.createEmployee('Max')
console.log(employee1, Department.fiscalYear)

// const accounting =  new Department('d1', 'Accounting')

// accounting.addEmployee('Max');
// accounting.addEmployee('Eric')

// accounting.describe()
// accounting.printEmployeeInformation()

// const accountCopy = { name:'DUMMY', describe: accounting.describe}

// accountCopy.describe()

// itDept.addEmployee('Max');
// itDept.addEmployee('Eric')
// console.log(itDept)

const accounting = new AccountingDepartment('d2', []);

itDept.describe()
accounting.addReports('Something went wrong')
console.log(accounting.mostRecentReport)
accounting.printReports()

accounting.addEmployee('Max')
accounting.addEmployee('Drew')
console.log(accounting)
