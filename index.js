const inquirer = require("inquirer")
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log ('Please enter your name')
        return false;

      }
    }

  },

  {
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
    type: 'input',
    message: "What is the title of your project?",
    name: 'title',


  },
  {
    type: 'input',
    name: 'description',
    message: "Enter a description of your project",

  },
  {
    type: 'input',
    name: 'installation',
    message: "What are the instructions to install your project?",
   
  },
  {
    type: 'input',
    name: 'usage',
    message: "usage information",
   
  },

  {
    type: 'input',
    name: 'Contributing',
    message: "contributing information",
   
  },

  {
    type: 'input',
    name: 'test',
    message: "test instructions",
    
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',

  },
  {
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
  