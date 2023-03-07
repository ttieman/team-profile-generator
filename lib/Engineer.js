const Employee = require('./Employee'); 

class Engineer extends Employee{   // this engineer class extends the employee class adding the github variable and changing the get role to engineer
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.getRole = () => {
            return "Engineer";
         }      
    }
    
    getGitHub(){
            return this.github;
        }
}


module.exports = Engineer;