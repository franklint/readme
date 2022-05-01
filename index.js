// TODO: Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer'); 
const generate= require('./utils/generateMarkdown.js')
const path = require('path'); 
// TODO: Create an array of questions for user input


function init() {
   inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is the github username?',
            validate: nameInput_1 => {
                if (nameInput_1) {
                    return true;
                } else {
                    console.log('Please enter your github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your email address?',
            validate: nameInput_3 => {
                if (nameInput_3) {
                    return true;
                } else {
                    console.log('Enter email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name?',
            validate: nameInput_5 => {
                if (nameInput_5) {
                    return true;
                } else {
                    console.log("Please enter a description of your project!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is your project description?',
            validate: nameInput_7 => {
                if (nameInput_7) {
                    return true;
                } else {
                    console.log('Please enter a dscription');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How will you use this app?',
            validate: nameInput_9 => {
                if (nameInput_9) {
                    return true;
                } else {
                    console.log('Please enter a usage description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'How many contributed?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('enter how many contributors!');
                    return false;
                }
            }
        }, 
        {
            type: 'checkbox', 
            name: 'license', 
            message: 'Please select a license, and please pick WTFPL (select with space bar)', 
            choices: ['WTFPL', 'The Unlicense', 'Perl']
        }, 
    ])
    .then((response)=>{
        return fs.writeFileSync(path.join(process.cwd(), "README.md"), generate(response)); 
    });
}; 

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}


// Function call to initialize app
init();
