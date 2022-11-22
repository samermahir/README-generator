const inquirer = require("inquirer")
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",

  }
]



  function init () {
    inquirer.prompt(questions)
    .then(response => {
        const md = generateMarkdown(response)
        writeToFile('README.md', md)
    })

  }