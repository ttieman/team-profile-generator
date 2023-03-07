const Employee = require('../lib/Employee');

const bob = new Employee("bob", "14", "bobman@gmail.com");

describe('Employee', () => {   // this tests the employee for data return and make sure the functions are returning the right values
  describe("checks each propery in the Employee class for correct returned values" , () => {
    it('Testing all the properties in order to determine correct returns' , () => {
      expect(bob.name).toBe("bob");
      expect(bob.id).toBe("14");
      expect(bob.email).toBe("bobman@gmail.com");
    });
  });
  describe('Check the employee class to ensure the data is populated correctly', () => {
    
    it(' Tests the Employee Name method', () => {
      expect(bob.getName()).toBe("bob");
    });


  });
  describe("Tests the Employee id property", () => {
    it('Check if the id propery is populated properly', () => {
      
      expect(bob.getId()).toBe("14");
    });
  });
  describe("Tests the Employee id property", () => {
    it('Check if the email propery is populated properly', () => {
     
      expect(bob.getEmail()).toBe("bobman@gmail.com");
    });
  });


});