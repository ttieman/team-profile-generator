const Intern = require('../lib/Intern');


describe('Intern', () => {
  describe('Check the Intern class to ensure the data is populated correctly', () => {
    
    it(' Tests the Intern Name property', () => {
      const bob = new Employee("bob", "14", "bobman@gmail.com");
      expect(bob.name).toBe("bob");
    });


  });
  describe("Tests the Intern id property", () => {
    it('Check if the id propery is populated properly', () => {
      const bob = new Employee("bob", "14", "bobman@gmail.com");
      expect(bob.id).toBe("14");
    });
  });
  describe("Tests the Intern id property", () => {
    it('Check if the email propery is populated properly', () => {
      const bob = new Employee("bob", "14", "bobman@gmail.com");
      expect(bob.email).toBe("bobman@gmail.com");
    });
  });


});