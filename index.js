//node packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

//prompt user for answers to questions
const promptUser = () => {
    return inquirer.prompt([
        { 
            //project information
            type: 'input', 
            name: 'title',
            message: 'What is your project title? (Required)',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!'); 
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a project description!'); 
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'linkConfirm',
            message: "Would you like to include a link to your deployed project?",
            default: true,
        },
        {
            type: 'input',
            name: 'link',
            message: "Enter your link.",
            when: ({ linkConfirm }) => linkConfirm
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do users install your app?',
        },
        {
            type: 'input', 
            name: 'usage', 
            message: 'How do users use your app?'   
        },
        {
            type: 'input',
            name: 'screenshot', 
            message: 'If you would like to add a screenshot, create an assets/images folder in your repo and upload your screenshot to it. As long as your folders are labelled correctly, all you need to do is enter your FILENAME here and it will be added to your README. Ex. "./assets/images/screenshot.png" where "screenshot.png" is your FILENAME.' 
        },
        {
            type: 'input', 
            name: 'contribution', 
            message: 'What are the contribution guidelines for your app?'   
        },
        {
            type: 'input', 
            name: 'test', 
            message: 'What are the test instructions for your app?'   
        },
        {
            //Credits information
            type: 'input', 
            name: 'credits',
            message: 'List your collaborators, if any, with links to their GitHub profiles if you wish.'
        },
        {
            //license information
            type: 'list',
            name: 'license',
            message: 'What licence did you use?',
            choices: ['MIT License', 'GNU GPL License', 'Apache License 2.0', 'Mozilla Public License 2.0']
        },
        {
            //user information
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email'
        }
    ])
    .then(readmeData => {
        return generateMarkdown(readmeData);
    })
    .then(readmeFile => {
        return writeToFile('./dist/README.md', readmeFile);
    })
    .catch(err => {
        console.log(err);
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            //if error, reject promise
            if (err) {
                reject(err);
                return;
            }
            //if all is well
            resolve({
                ok: true, 
                message: 'File created!'
            });
        });
    });
};

//initiallize app
promptUser();