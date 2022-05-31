const inquirer = require("inquirer")

const fs = require('fs')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/intern')

// Begin inquierer prompts
// .THEN, create child element and append it to the cardbox div, use flex properties and padding in css

const Employees = []

// Need to add a function that pushes the responses from the prompts into a the class array, then run printerTest, which creates our html file and prints the correct responses (enginier[1].response.name etc)
function printerTest() {

    let empHTML = " ";
    for (i=0; i< Employees.length; i++){
        let special = ""
        if (Employees[i].getRole()=== "Manager"){
            special = `<div class="special">Office: ${Employees[i].getofficeNumber()}</div>`
        }
        if (Employees[i].getRole()=== "Intern"){
            special = `<div class="special">School: ${Employees[i].getSchool()}</div>`
        }
        if (Employees[i].getRole()=== "Engineer"){
            special = `<div class="special">Github: ${Employees[i].getgitHub()}</div>`
        }
        empHTML = empHTML + `
        <div class="card">
        <div class="head">
        <div class="name">${Employees[i].getName()}</div>
        <div class="role">${Employees[i].getRole()}</div>
        </div>
        <div class="details">
            <div class="idnum">ID: ${Employees[i].getId()}</div>
            <div class="email">Email: ${Employees[i].getEmail()}</div>
            ${special}
        </div>

    </div>

        `


    }

    fs.writeFile('index.html', `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./reset.css">
        <link rel="stylesheet" href="./style.css">
        <title>My Team</title>
    </head>
    <body>
        <header>
            My Team
        </header>
    
        <main>
            
    ${empHTML}
               
            
    
        </main>
    
        <script src="./index.js"></script>
    </body>
    
    </html>`,
        (err) =>
            err ? console.error(err) : console.log('Commit Logged!'));
}





// CREATES THE INTERN

function createIntern() {

    inquirer.prompt([

        {
            type: 'input',
            message: 'Name?',
            name: 'name',
        },

        {
            type: 'input',
            message: 'ID number?',
            name: 'id',
        },

        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },

        {

            type: 'input',
            message: 'What school do you attend?',
            name: 'school',
        },
    ])
        .then((response) => {
            console.log(response)
            const intern = new Intern (response.name, response.id, response.email, response.school);
            Employees.push(intern)
            createTeam()
        })
}



// CREATES THE ENGINEER INFO
function createEngineer() {

    inquirer.prompt([

        {
            type: 'input',
            message: 'Name?',
            name: 'name',
        },

        {
            type: 'input',
            message: 'ID number?',
            name: 'id',
        },

        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },

        {

            type: 'input',
            message: 'Github?',
            name: 'github',
        },
    ])
        .then((response) => {
            console.log(response)
            const enginieer = new Engineer (response.name, response.id, response.email, response.github);
            Employees.push(enginieer)
            createTeam()
        })
}


function createTeam() {
    inquirer.prompt([
        {

            type: 'list',
            message: 'Add a new employee?',
            name: 'moreEmployee',
            choices: ['Engineer', 'Intern', 'No thanks']

        }])
        .then((response) => {
            console.log(response)
            if (response.moreEmployee == 'Engineer') {
                createEngineer()

            };
            if (response.moreEmployee == 'Intern'){
                createIntern()
            }
            if (response.moreEmployee == 'No thanks'){
                console.log(Employees)
                printerTest()
            }
        });

}

function createManager() {

    inquirer.prompt([

        {
            type: 'input',
            message: 'Hello Glorious Leader, may I have your name?',
            name: 'manageName',
        },

        {
            type: 'input',
            message: 'ID number?',
            name: 'manageId',
        },

        {
            type: 'input',
            message: 'What is your email?',
            name: 'manageEmail',
        },

        {

            type: 'input',
            message: 'Office Number?',
            name: 'manageOffice',
        },
    ])
        .then((response) => {
            console.log(response)
            const manager = new Manager (response.manageName, response.manageId, response.manageEmail, response.manageOffice);
            Employees.push(manager)
            createTeam()
        })


}

createManager()
