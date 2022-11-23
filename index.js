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
      "MIT",
      "ISC",
      "EPL 1.0"
    ]


  },
  {
    type: 'input',
    message: "What is the title of your project?",
    name: 'title',
    validate: titleInput => {
      if (titleInput) {
              return true;
              } else {
                console.log ('Please enter your project title')
                return false;
              }
            }


  },
  {
    type: 'input',
    name: 'description',
    message: "Enter a description of your project",
    validate: descriptionInput => {
      if (descriptionInput) {
         return true;
              } else {
                console.log ('Please enter your project description')
                return false;
              }
            }

  },
  {
    type: 'input',
    name: 'installation',
    message: "What are the instructions to install your project?",
    validate: installationInput => {
      if (installationInput) {
        return true;
              } else {
                console.log ('Please enter your installation instructions')
                return false;
              }
            }

  },
  {
    type: 'input',
    name: 'usage',
    message: "usage information",
    validate: usageInput => {
      if (usageInput) {
        return true;
              } else {
                console.log ('Please enter your usage instructions')
                return false;
              }
            }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: emailInput => {
      if (emailInput) {
        return true;
              } else {
                console.log ('Please enter your email address')
                return false; 

    }
  }

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
  