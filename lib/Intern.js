const Employee = require('./Employee');
// this Intern class extends the employee class adding the school variable and changing the get role to intern
class Intern extends Employee {
    constructor(name,id,email,school){
        super(name, id, email);
        this.school = school;
        this.getRole = () => {
            return "Intern";
        }     
    }
    getSchool(){
        return this.school;
    }
}





module.exports = Intern;