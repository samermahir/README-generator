const inquirer = require("inquirer")
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')

const questions = [
  {
    //Asks user for name
    type: "input",
    name: "name",
    message: "What is your name?",

  },

  {
    //Gives user a choice of 3 licenses or no license
    type: 'list',
    name: 'license',
    message: 'Which license do you want to use?',
    choices: [
      {name: 'MIT', value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"},
      {name: "ISC", value: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"},
      {name: "EPL 1.0", value: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"},
      {name:"none", value: "none"},
    ]


  },
  {
    //Asks user the title for the project
    type: 'input',
    message: "What is the title of your project?",
    name: 'title',


  },
  {
    //Asks user a brief description of the project
    type: 'input',
    name: 'description',
    message: "Enter a description of your project",

  },
  {
    //Asks user what is needed to install for the project
    type: 'input',
    name: 'installation',
    message: "What are the instructions to install your project?",
   
  },
  {
    //Explains how to use command line to produce README
    type: 'input',
    name: 'usage',
    message: "usage information",
   
  },

  {
    //Asks if anyone wants to contribute to this project
    type: 'input',
    name: 'Contributing',
    message: "contributing information",
   
  },

  {
    //Explains how to run a test on the command line
    type: 'input',
    name: 'test',
    message: "test instructions",
    
  },
  {
    //Asks user for email address
    type: 'input',
    name: 'email',
    message: 'What is your email address?',

  },
  {
    //Asks user for GitHub username
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
    
  }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
      if (err) {
          console.log(err);
      }
  });

}



  function init () {
    inquirer.prompt(questions)
    .then(response => {
        const md = generateMarkdown(response)
        writeToFile('README.md', md)
    })

  }

  init()
  