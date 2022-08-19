// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "what is your github username",
  },
  {
    type: "input",
    name: "github",
    message: "what is your github username",
  },
  {
    type: "input",
    name: "github",
    message: "what is your github username",
  },
  {
    type: "input",
    name: "github",
    message: "what is your github username",
  },
  {
    type: "input",
    name: "github",
    message: "what is your github username",
  },
  {
    type: "input",
    name: "github",
    message: "what is your github username",
  },
  {
    type: "input",
    name: "github",
    message: "what is your github username",
  },
  {
    type: "input",
    name: "github",
    message: "what is your github username",
  },
  {
    type: "input",
    name: "github",
    message: "what is your github username",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("creating readme...");
    writeToFile(
      "README.md",
      generateMarkdown({
        ...inquirerResponses,
      })
    );
  });
}

// Function call to initialize app
init();