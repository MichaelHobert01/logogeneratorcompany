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
            choices: ['circle', 'square', 'triangle']
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
        const svg = `<svg width="300" height="200">
    <text x="0" y="50" font-size="50" fill="${answers.textColor}">${answers.letters}</text>
    <${answers.shape} cx="150" cy="125" r="50" fill="${answers.backColor}" />
</svg>`;
        fs.writeFileSync('logo.svg', svg);
        console.log('Your logo has been printed');
    }); 