// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils.generateMarkdown.js');
console.log ("Welcome to the READme Generator")
console.log ("Please provide answers to the following questions")

// TODO: Create an array of questions for user input
const questions = ([
inquirer
    .prompt([
    {
        type: 'input',
        message: 'title',
        name:'What is the name of your application?',
        validate: (value)=>{ 
            if(value)
            {return true;
            } else{
                console.log('Invalid Value')
            }
        },
    },
    {
        type: 'input',
        message: 'What is a brief description of your application?',
        name:'description',
        validate: (value)=>{ 
            if(value)
            {return true;
            } else{
                console.log('Invalid Value')
            }
        },
    },
    {
        type: 'input',
        message: 'What was your motivation for this application?',
        name:'motivation',
        validate: (value)=>{ 
            if(value)
            {return true;
            } else{
                console.log('Invalid Value')
            }
        },
    },
    {
        type: 'input',
        message: 'Why did you build this application?',
        name:'why',
        validate: (value)=>{ 
            if(value)
            {return true;
            } else{
                console.log('Invalid Value')
            }
        },
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name:'solved',
        validate: (value)=>{ 
            if(value)
            {return true;
            } else{
                console.log('Invalid Value')
            }
        },
    },
    {
        type: 'input',
        message: 'What did you learn with creating this application?',
        name:'what',
        validate: (value)=>{ 
            if(value)
            {return true;
            } else{
                console.log('Invalid Value')
            }
        },
    },
    {
        type: 'input',
        message: 'What steps are required to install your application?',
        name:'install',
        validate: (value)=>{ 
            if(value)
            {return true;
            } else{
                console.log('Invalid Value')
            }
        },
    },
    {
        type: 'input',
        message: 'Are there any collaborators on this application?',
        name:'collabs',
        validate: (value)=>{ 
            if(value)
            {return true;
            } else{
                console.log('Invalid Value')
            }
        },
    },
    {
        type: 'input',
        message: 'Did you use any licenses for this application?',
        name:'licenses',
        validate: (value)=>{ 
            if(value)
            {return true;
            } else{
                console.log('Invalid Value')
            }
        },
    },
    {
        type: 'input',
        message: 'What is your GitHub?',
        name:'github',
        validate: (value)=>{ 
            if(value)
            {return true;
            } else{
                console.log('Invalid Value')
            }
        },
    },
    {
        type: 'input',
        message: 'What is your LinkedIn?',
        name:'linkedin',
        validate: (value)=>{ 
            if(value)
            {return true;
            } else{
                console.log('Invalid Value')
            }
        },
    },
    {
        type: 'input',
        message: 'What is your email?',
        name:'email',
        validate: (value)=>{ 
            if(value)
            {return true;
            } else{
                console.log('Invalid Value')
            }
        },
    }
]
)
// then(({
//     titles
// })=>{
//     const template = `# ${title}
//     * [Description]($description)
//     * [Motivation]($motivation)
//     * [Why]($why)
//     * [Solved]($solved)
//     * [What]($what)
//     * [Install]($install)
//     * [Collabs]($collabs)
//     * [Licenses]($licenses)
//     # Description
//     ${description}}
//     ## Motivation
//     ${motivation}
//     ## Why
//     ${why}
//     ## Solved
//     ${solved}
//     ## What
//     ${what}
//     ## Install
//     ${Install}
//     ## Collabs
//     ${collabs}
//     ##Licenses
//     ${licenses}

//     # Contact
//     *GitHub:${git}
//     *LinkedIn :${linkedin}
//     #Email: ${email}`;

// }
// )
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase(x).split('').join('').md ,data,(err)=>{
if(err){
    console.log(err)
}
console.log('Your ReadMe has been generated'); 
    }}`)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput){
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
