const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name, id, email);
        this.school = school;
        this.getRole = () => {
            return "Intern";
        }     
    }
    getSchool(){
        return"school";
    }
}

const henry = new Intern("henry","7","ashjkdfhjkfdasklasdfhj","uofa");

console.log(henry);
henry.getRole();

