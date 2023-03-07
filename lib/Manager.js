const Employee = require("./Employee");
// this manager class extends the employee class adding the officenumber variable and changing the get role to manager
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





module.exports = Manager;