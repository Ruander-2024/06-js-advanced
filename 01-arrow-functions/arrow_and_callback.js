
const employees = [
    {name: "Zachary Barron",age:  20,position: "manager",salary: 10000},
    {name: "Carly Browne",age:  30,position: "kitchen porter",salary: 20000},
    {name: "Hugo Clarke",age:  25,position: "bartender",salary: 25000},
    {name: "Johhny Paine",age:  26,position: "bartender",salary: 17000},
    {name: "Hillary Newman",age:  65,position: "manager",salary: 85000},
    {name: "Bob",age:  50,position: "chef",salary: 65000},
    {name: "Edith Smith",age:  45,position: "bartender",salary: 18000},
    {name: "Savanna Millington",age:  41,position: "chef",salary: 43000}
];

/**
 * @FELADAT
 * Készítsd el az alább metódusokat. Használj "arrow function"-ket, mint  callback function...
 * Ahol kell használj minél több beépített metódust.
 */

/**
 * @TODO make a list of all the employees whose name starts with 'H'
 */ const employeeWithH = employees.filter(employee => employee.name[0] === 'H'); 
 console.table(employeeWithH);

/**
 * @TODO make a list of all the employees older than 30
 */
    const employee30 = employees.filter(employee => employee.age > 30);
 console.table(employee30);

/**
 * @TODO make a list of all the employees with salary greater than 30000, sorted by their salary (ascending)
 */
    const employeeSalary = employees.filter(employee => employee.salary > 30000).sort((a , b) => a.salary - b.salary);
 console.table(employeeSalary);

/**
 * @TODO make a list of all the employess with salary between 25000 and 65000 (inclusive on both ends)
 */
const employeeSalary2 = employees.filter(employee => employee.salary >= 25000 &&  employee.salary <= 65000 );
console.table(employeeSalary2);

/**
 * @TODO make a list of all the bartenders' name
 */
 const employeeBart = employees.filter(employee => employee.position === 'bartender').map(bartender => bartender.name);
console.table(employeeBart);

/**
 * @TODO calculate the average salary of the employees (use "reduce" method)
 */
    const avgSalary = employees.reduce((avgSalary, employee) => {
        let salary = employee.salary;
        avgSalary += salary;
        return avgSalary;
    }, 0) / employees.length


console.log(avgSalary);

/**
* @TODO sum the number of letters of all the first names that are longer than 5 characters
* Write the inner logic of "filter" and "reduce" methods separately (in arrow functions)
* Use correct naming for the arrow functions! U can use other "built in" methods as well
* Pass them to the "filter" and "reduce" methods as references
*/

//console.log();


/**
 * @TODO make a list of all the monograms of employees who has both first and last names
 * example: {"Bob Smint", "John Jones", "Frank"} -> {"BS", "JJ"}
 * Write separatly the inner logics of your all arrow functions
 */

//console.table();
