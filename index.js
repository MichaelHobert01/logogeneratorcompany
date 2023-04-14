const inquirer = require('inquirer');
inquirer
    .Prompt([
        {
            type: "input", 
            message: "Letters plz",
            name: "letters"
        },
        {
            type: "input",
            message: "Pick a shape",
            name: "shape"
        },
        {
            type: "input",
            message: "Pick a shape color",
            name: "backColor"
        },
        {
            type: "input",
            message: "Pick a text color",
            name: "textColor"
        },
    ])