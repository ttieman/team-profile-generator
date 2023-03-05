const Employee = require('../lib/Employee');

const bob = new Employee("bob", "14", "bobman@gmail.com");

describe('Employee', () => {
  describe('Check the employee class to ensure the data is populated correctly', () => {
    
    it(' Tests the Employee Name property', () => {
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