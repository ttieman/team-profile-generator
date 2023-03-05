const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name,id, email);
        this.officeNumber = officeNumber;
        this.getRole = () => {
            return 'Manager'; 
        }
    }
  getOfficeNum(){
    return this.officeNumber;
  }
}

const bob = new Manager("bob","12","sdalsjkd","456");

bob.getRole();

module.exports = Manager;