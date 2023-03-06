//module imports
const inquirer = require('inquirer');
const fs = require("fs");

//imported classes from lib 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require('./lib/Intern');

//an array of the members that belong to the team
const teamRoster = [];

// this will promp the user to enter the manager of the teams information
//when the software has been opended 

function promptManager() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: `What is the manager's name?`,
            validate: nameData => {
                var isNameFormat = /^[A-Za-z]{1,20}/.test(nameData);
                if (isNameFormat) {
                    return true;
                } else {
                    console.log(" Please try again.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: `What is the manager's Id?`,
            validate: function (idData) {
                if (isNaN(idData) === true) {
                    console.log(" That is not a number please try again.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: `managerEmail`,
            message: `What is the manager's Email address?`,
            validate: emailData => {
                isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailData);
                if (isEmail) {
                    return true;
                } else {
                    console.log(' This is not a valid email please try again.');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: `officeNum`,
            mesage: `What is the manager's office number?`,
            validate: function (officeNumData) {
                if (isNaN(officeNumData) === true) {
                    console.log(" Not a valid number please try again.");
                    return false;
                } else {
                    return true;
                }
            }
        },

    ]).then(managerData => {
        const {managerName, managerId, managerEmail, officeNum} = managerData;
        const manager = new Manager(managerName,managerId,managerEmail,officeNum);
        teamRoster.push(manager);
    })
};

function promptEmployee() {
    return inquirer.prompt([
        {
            type:'list',
            name:'role',
            message: `Please select the team member's role`,
            choices: ['Engineer','Intern'],

        },
        {
            type: 'input',
            name:'teamMemberName',
            message:`What is the team member's name?`,
            validate: memberName => {
                var isNameFormat = /^[A-Za-z]{1,20}/.test(memberName);
                if (isNameFormat === true){
                    return true;
                }else {
                    console.log(' Please enter a name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'memberId',
            message: `What is the team member's Id number?`,
            validate: memberId => {
                if(isNaN(memberId)){
                    console.log(' Please enter a valid number.');
                    return false;
                }else{
                    return true;
                }
            }

        },
        {
            type:'input',
            name: 'memberEmail',
            message:`What is the team member's Email address?`,
            validate: memberEmail => {
                isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(memberEmail);
                if (isEmail === true){
                    return true;
                }else {
                    console.log(' Please enter a valid Email.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGitHub',
            message:`What is the Engineers GitHub UserName?`,
            when: (input) => input.role === "Engineer",
            validate: usernameData => {
                if (usernameData){
                    return true;
                }else{
                    console.log(' Please enter a UserName');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: `What school is the Intern from?`,
            when: (input) => input.role === "Intern",
            validate: schoolData => {
                if(schoolData){
                    return true;
                }else{
                    console.log(` Please enter the Intern's school.`)
                }
            }
        },
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Would you like to add another team member?',
            default: false
        },
    ]).then(memberData => {
        let { role, teamMemberName, memberEmail, memberId, internSchool, addMore, engineerGitHub } = memberData;
        let employee;

        if (role === "Engineer"){
            employee = new Engineer(teamMemberName,memberId,memberEmail,engineerGitHub),
            console.log(employee);
        }else if (role === 'Intern'){
            employee = new Intern(teamMemberName,memberId,memberEmail,internSchool);
            console.log(employee);
        }
        teamRoster.push(employee);
        if(addMore === true){
            return promptEmployee(teamRoster);
        } else {
            
            return teamRoster;
        }
    })
}

function writeFile(writeData){
    fs.writeFile('./dist/index.html', writeData, err => {
        if(err){
            console.log(err);
            return;
        }else {
            console.log("The team profile has been generated succesfully!");
        }
    });
};

