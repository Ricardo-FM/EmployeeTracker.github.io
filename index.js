var mysql = require("mysql");
const inquirer = require("inquirer");
const confirm = require('inquirer-confirm');


var connection = mysql.createConnection({
  host: "localhost",
  port: 3000,
  user: "root",
  password: "password",
  database: "employeeDB"
});

var departments;
var roles;
var employees;


function welcome() {

  inquirer.prompt(

      {
        type: "list",
        message: "Welcome!",
        name: "options",
        options: [
          {
            name: "View all departments",
            value: "viewDepartment"
          },
          {
            name: "View all roles",
            value: "viewRole"
          },
          {
            name: "View all employees",
            value: "viewEmployee"
          },
          {
            name: "Add department",
            value: "addDepartment"
          },
          {
            name: "Add role",
            value: "addRole"
          },
          {
            name: "Add employee",
            value: "addEmployee"
          },
          {
            name: "Update role",
            value: "updateRole"
          }
        ]
      }).then(function (res) {

      menu(res.options)
      
    })
}

function menu(option) {
  switch (option) {
    case "viewDepartment":
      viewAllDepartment();
      break;
    case "viewEmployee":
      viewAllEmployee();
      break;
    case "viewRole":
      viewAllRole();
      break;
    case "addDepartment":
      addDepartment();
      break;
    case "addEmployee":
      addEmployee();
      break;
    case "addRole":
      addRole();
      break;
    case "updateRole":
      updateRole();
      break;
  }
}

function viewAllDepartment() {
  console.log("view all departments")
  connection.query("SELECT * from department", function (error, res) {
    console.table(res);
  })
}

function viewAllEmployee() {
  connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;", function (error, res) {
    console.table(res);
  })
}

function viewAllRole() {
  connection.query("SELECT * from role", function (error, res) {
    console.table(res);
  })
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "New department name?",
        name: "name"
      }
    ])
    .then(function (response) {
      addDepartment(response);
    })
}

function addEmployee() {
  inquirer.prompt([
      {
        type: 'input',
        message: "First name?",
        name: "firstName",
      },
      {
        type: "input",
        message: "Last name?",
        name: "lastName",
      },
      {
        type: "list",
        message: "Employee title?",
        name: "title",
        options: showroles
      },
      {
        type: "list",
        message: "Employee's manager?",
        name: "manager",
        options: showemployees,
      }
    ]).then(function (response) {
      addEmployees(response)
    })
}

function addRole() {
  inquirer.prompt([
      {
        type: "input",
        message: "New employee role?",
        name: "title"
      },
      {
        type: "input",
        message: "Salary?",
        name: "salary"
      },
      {
        type: "list",
        message: "Department ID?",
        name: "id",
        options: showdepartments
      }
    ])
    .then(function (response) {
      addEmployeeRole(response);
    })
}

function updateRole() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Update role?",
        name: "empID",
        options: showemployees
      },
      {
        type: "list",
        message: "New role?",
        name: "id",
        options: showroles
      }
    ])
    .then(function (response) {
      updateEmployeeRole(response);
    })
}