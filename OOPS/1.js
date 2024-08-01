class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        this.leave = 10;
        this.penalty = 1300;
    }
    takeLeave(days) {
        if (this.leave >= days) {
            this.leave -= days;
            this.salary -= days * this.penalty;
            return `${this.name} taken ${days} days of leave. Remaining leave: ${this.leave}. Salary after penalty of leave: ${this.salary}`;
        } else {
            return "You don't have enough leave";
        }
    }
    checkSalary() {
        return `The current salary of ${this.name} is ${this.salary}`;
    }
}
class Manager extends Employee {
    constructor(name, salary) {
        super(name, salary);
        this.employees = [];
    }
    removeEmployee(employee) {
        for (let i = 0; i < this.employees.length; i++) {
            if (this.employees[i].name === employee.name) {
                this.employees.splice(i, 1);
                return `${employee.name} has been removed from the team`;
            }
        }
        return `Employee not found. Please check the details and try again.`;
    }
    checkEmployee(employee) {
        for (let i = 0; i < this.employees.length; i++) {
            if (this.employees[i].name === employee.name) {
                return `${employee.name} is add in the team`;
            }
        }
        return `${employee.name} is not in the team`;
    }
}
let employee1 = new Employee("Employee1", 75000);
let employee2 = new Employee("Employee2", 85000);
let employee3 = new Employee("Employee3", 95000);
let manager = new Manager();
manager.employees.push(employee1, employee2, employee3);
console.log(employee1.takeLeave(2));
console.log(employee1.checkSalary());
console.log(employee3.takeLeave(4));
console.log(employee3.checkSalary());
console.log(manager.removeEmployee(employee1));
console.log(manager.checkEmployee(employee1));
console.log(manager.checkEmployee(employee3));