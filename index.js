const fs = require('fs');
const inquirer = require('inquirer');
inquirer
    .prompt([
        {
            type: "input", 
            message: "Letters plz",
            name: "letters", 
            validate: function (value) {
                if (value.length > 3) {
                    return 'Please enter up to 3 characters.';
                } else {
                    return true; 
                }
            }
        },
        {
            type: "list",
            message: "Pick a shape",
            name: "shape",
            choices: ['circle', 'rect', 'triangle']
        },
        {
            type: "input",
            message: "Pick a text color",
            name: "textColor"
        },
        {
            type: "input",
            message: "Pick a shape color",
            name: "backColor",
        },
    ]).then(answers => {
        let shape = '';
        switch (answers.shape) {
            case 'circle':
                shape = `<circle cx="110" cy="95" r="25" />`;
                break;
            case 'rect':
                shape = `<rect x="90" y="70" width="50" height="50" />`;
                break;
            case 'triangle':
                shape = `<polygon points="90,105 140,105 115,55" />`;
                break;
        }

        const svg = `<svg width="300" height="200">
    <style>
        text {
            font-size: 17.5px;
            fill: ${answers.textColor};
            font-family: Arial, sans-serif;
            z-index: 2;
        }
        circle {
            fill: ${answers.backColor};
            stroke: black;
            stroke-width: 2px;
            z-index: 1; 
        }
        rect {
            fill: ${answers.backColor};
            stroke: black;
            stroke-width: 2px;
            z-index: 1; 
        }
        polygon {
            fill: ${answers.backColor};
            stroke: black;
            stroke-width: 2px;
            z-index: 1;
        }
        </style>
        ${shape}
        <text x="100" y="100">${answers.letters}</text>
        </svg>`;
        fs.writeFileSync('logo.svg', svg);
        console.log('Your logo has been printed');
    });
