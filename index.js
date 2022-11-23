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
]



  function init () {
    inquirer.prompt(questions)
    .then(response => {
        const md = generateMarkdown(response)
        writeToFile('README.md', md)
    })

  }