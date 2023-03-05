const Employee = require('../lib/Employee');


describe('Employee', () => {
  describe('Check the employee class to ensure the data is populated correctly', () => {
    
    it(' Tests the Employee Name property', () => {
      const bob = new Employee("bob", "14", "bobman@gmail.com");
      expect(bob.name).toBe("bob");
    });


  });
  describe("Tests the Employee id property", () => {
    it('Check if the id propery is populated properly', () => {
      const bob = new Employee("bob", "14", "bobman@gmail.com");
      expect(bob.id).toBe("14");
    });
  });
  describe("Tests the Employee id property", () => {
    it('Check if the email propery is populated properly', () => {
      const bob = new Employee("bob", "14", "bobman@gmail.com");
      expect(bob.email).toBe("bobman@gmail.com");
    });
  });


});