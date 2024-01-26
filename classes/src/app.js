// Private attributes are only accessible in the class they are defined
// Protected keyword makes attributes available to access in any inherited class
// Static methods/variables can be used without instantiating a class
// Therefore static methods/variables cannot be accessed inside the class unless called with className.method/var
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract classes cannot be instantiated by themselves
// Abstract classes are there to provide inheritance implementation to children classes
// Methods marked as abstract will need to be defined in each child class
var Department = /** @class */ (function () {
    // readonly introduced by typescript
    // readonly can be used once during intiailization and cannot be reassigned
    function Department(id, name) {
        this.id = id;
        this.employees = [];
        console.log(Department.fiscalYear);
        // this.name = n
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    // private name: string;
    Department.fiscalYear = 2024;
    return Department;
}());
// extends keyword is used for inheritance
var ITDepartmnet = /** @class */ (function (_super) {
    __extends(ITDepartmnet, _super);
    function ITDepartmnet(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins; // super keyword must precede any this attributes
        return _this;
    }
    ITDepartmnet.prototype.describe = function () {
        console.log("IT Department - ID: " + this.id);
    };
    return ITDepartmnet;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountingDepartment.prototype, "mostReceptReport", {
        set: function (value) {
            if (!value) {
                throw new Error('Pass in valid value');
            }
            this.addReports(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment.prototype.addReports = function (text) {
        this.reports.push(text);
        this.lastReport = this.reports[this.reports.length - 1];
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var itDept = new ITDepartmnet('1', ['Max']);
var employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);
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
var accounting = new AccountingDepartment('d2', []);
itDept.describe();
accounting.addReports('Something went wrong');
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee('Max');
accounting.addEmployee('Drew');
console.log(accounting);
