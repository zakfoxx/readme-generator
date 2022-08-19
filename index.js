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
    message: "what is your github username?",
  },
  {
    type: "input",
    name: "title",
    message: "what is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "describe your project",
  },
  {
    type: "list",
    name: "liscense",
    message: "what kind of liscence does your project have",
    choices: ["MIT", "Apache2.0", "GPL3.0"],
  },
  {
    type: "input",
    name: "installation",
    message: "what command should you run to install dependancies",
  },
  {
    type: "input",
    name: "test",
    message: "what command should you use to run tests",
  },
  {
    type: "input",
    name: "usage",
    message: "what does the user need to know about using the repo",
  },
  {
    type: "input",
    name: "contributing",
    message: "what does the user need to do to contribute",
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
