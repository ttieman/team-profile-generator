const Employee = require('../lib/Employee');


  describe('Employee', () => {
    describe('Tests the name propery of Employee', () => {

      it('Check the employee class to ensure the data is populated correctly'), () => {
          const bob = new Employee("bob","14", "bobman@gmail.com");
          expect(Employee.name).tobe("bob");
      }


    });
    
    
  });