  class Employee {   // this is the base class for all the employees containing name, id, and email, as well as get role function
        constructor(name,id,email){
            this.name = name;
            this.id = id;
            this.email = email;
        }
        getName() {
           return this.name;
        }
        getId(){
           return this.id;
        }
        getEmail(){
            return this.email;
        }
        getRole(){
           return 'Employee';
        }
        

  }

  module.exports = Employee;