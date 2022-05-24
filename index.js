const inquirer = require("inquirer")

const fs = require('fs')


    // Begin inquierer prompts
    // .THEN, create child element and append it to the cardbox div, use flex properties and padding in css
    // 

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Name?',
            name: 'name',
        },
        {
            type: 'list',
            message: 'Role?',
            name: 'role',
            choices: ['Manager', 'Employee', 'Engineer', 'Intern']
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
            message: 'Room number?',
            name: 'room',
        },
        {
            type: 'input',
            message: 'Github?',
            name: 'github',
        },
    ])
    // We promise there is a response, then once we get it, we can use that information to create a card
    .then((response) => {
        console.log(response)

// We are using the file system to create a new file that will contain all the information we need
        fs.writeFile('firstprompt.md', `${response.name}\n ${response.role}\n ${response.id}\n ${response.email}\n ${response.room}\n ${response.github}\n`,
            (err) =>
                err ? console.error(err) : console.log('Commit logged!'));


    });






        
    let ask = () => {
        // Prompt role, if x, than...prompt proper prompt for mang, emp, intern etc, store into an [...array]
        }


        let creation = () => {
            // Store items in an array, grab items and append them to the parent element, make new divs
            }
    

// Make classes, put the classes into [...array] create class via constructor