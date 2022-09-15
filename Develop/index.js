// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { message } = require('statuses');

// TODO: Create an array of questions for user input
const questions = ([
    {
        type: 'input',
        message: '',
        name:'',
        validate: (value)=>{ if(value){return true} else{return 'Invalid Value'}},
    },
    {
        type: 'input',
        message: '',
        name:'',
        validate: (value)=>{ if(value){return true} else{return 'Invalid Value'}},
    },
    {
        type: 'input',
        message: '',
        name:'',
        validate: (value)=>{ if(value){return true} else{return 'Invalid Value'}},
    },
    {
        type: 'input',
        message: '',
        name:'',
        validate: (value)=>{ if(value){return true} else{return 'Invalid Value'}},
    },
    {
        type: 'input',
        message: '',
        name:'',
        validate: (value)=>{ if(value){return true} else{return 'Invalid Value'}},
    },
    {
        type: 'input',
        message: '',
        name:'',
        validate: (value)=>{ if(value){return true} else{return 'Invalid Value'}},
    },
];
).then(({
    titles
})=>{
    const template = `# ${title}
    * [Installation]($installation)
    * [Usage]($usage)
    * [Contribution]($contribution)
    * [Credits]($credits)
    * [License]($license)
    # Installation
    ${installation}
    ## Usage
    ${usage}
    ## Contribution
    ${contribution}
    ## Instructions
    ${instructions}
    ## Credits
    ${credits}
    ## License
    ${license}

    # Contact
    *GitHub:${git}
    *LinkedIn :${linkedin}
    #Email: ${email}`;

}
)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
