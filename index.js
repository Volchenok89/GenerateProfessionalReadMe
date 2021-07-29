//node packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("../Challenge9/generateMarkdown.js");

//prompt user for answers to questions
const promptUser = () => {
    return inquirer.prompt([
        { 
            //Questions//
            type: "input", 
            name: "title",
            message: "What is the title of your project?",
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log("Enter the title of your project"); 
                    return false;
                }
            }
        },
        {
            //Description//
            type: "input",
            name: "description",
            message: "Describe your project",
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else {
                    console.log("Enter a description of your"); 
                    return false;
                }
            }
        },
        {
            //Link question//
            type: "confirm",
            name: "linkProject",
            message: "Do you want to add a link for the project",
            default: true,
        },
        {
            //Link//
            type: "input",
            name: "link",
            message: "Enter the link",
            when: ({ linkProject }) => linkProject
        },
        {
            //Installation//
            type: "input",
            name: "installation",
            message: "How will your app be installed?",
        },
        {
            //Usage//
            type: "input", 
            name: "usage", 
            message: "How will your app be used?"  
        },
        {
            //Screenshot//
            type: "input",
            name: "screenshot", 
            message: "To add a screenshot, create a folder assets/images and add the screenshot inside. Enter your FILENAME and it will be added to your new README."
            
        },
        {
            //Contribution//
            type: "input", 
            name: "contribution", 
            message: "Enter your app's contribution guide."   
        },
        {
            //Test//
            type: "input", 
            name: "test", 
            message: "Enter your test instructions."   
        },
        {
            //Credits//
            type: "input", 
            name: "credits",
            message: "List your collaborators id you have them."
        },
        {
            //License//
            type: "list",
            name: "license",
            message: "What type of license you used?",
            choices: ["Mozilla Public License 2.0", "GNU GPL License", "MIT License", "Apache License 2.0"]
        },
        {
            //User//
            type: "input",
            name: "github",
            message: "Enter your Github Name:"
        },
        {
            //Email//
            type: "input",
            name: "email",
            message: "Enter your email:"
        }
    ])
    .then(readmeData => {
        return generateMarkdown(readmeData);
    })
    .then(readmeFile => {
        return writeToFile("./dist/README.md", readmeFile);
    })
    .catch(err => {
        console.log(err);
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            //If error, reject//
            if (err) {
                reject(err);
                return;
            }
            //If no error//
            resolve({
                ok: true, 
                message: "File created!"
            });
        });
    });
};

//initiallize the app//
promptUser();