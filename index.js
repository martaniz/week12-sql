const mysql = require('mysql');

const inquirer = require('inquirer'); 
const cTable = require('console.table');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Password12345!',
        database: 'tracker_db'
    },
);

const menu = [
{
    type: "list",
    name: "choice",
    message: "what would you like to do",
    choices: [
        {
            name: "View all departments",
            value: "VIEW_DEPTS"
        },
        {
            name: "view all roles",
            value: "VIEW_ROLES"
        },
        {
            name: "view all employees",
            value: "VIEW_EMPLOYEES"
        },
        {
            name: "add a department",
            value: "ADD_DEP"
        },
        {
            name: "add a role",
            value: "ADD_ROLE"
        },
        {
            name: "add an employee",
            value: "ADD_EMPLOYEE"
        },
        {
            name: "update and employee role",
            value: "UPDATE_EMPLOYEE"
        }
    ]
}];

function runMenu() {
    inquirer.prompt(menu)
    .then((selection) => {
        console.log(selection)
        if (selection.choice === "VIEW_EMPLOYEES") {
            //TO VIEW ALL EMP
const sql = "SELECT * FROM employee"
db.query(sql, (error, result) => {
    if(error) {
        console.log(error)
    }
    console.table(result)
})
        }   else if (selection.choice === "ADD_ROLE"  ) {

        }   else if (selection.choice === "ADD_EMPLOYEE") {

        }
        // conditional statement to call function below
    })
}

// build query functions

runMenu();