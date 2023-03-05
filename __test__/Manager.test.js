const Manager = require('../lib/Manager');

const bob = new Manager("bob", "14", "bobman@gmail.com", "15115");

describe('Manager', () => {
    describe('Check the employee class to ensure the data is populated correctly', () => {
      
      it(' Tests the Manager Name property', () => {
        expect(bob.getName()).toBe("bob");
      });

  });
  describe("Tests the Manager id property", () => {
    it('Check if the id propery is populated properly', () => {
        
      expect(bob.getId()).toBe("14");
    });
  });
  describe("Tests the Manager email property", () => {
    it('Check if the email propery is populated properly', () => {
       
      expect(bob.getEmail()).toBe("bobman@gmail.com");
    });
  });
 describe("Tests the Manager officenumber property", () => {
    it('Check if the office number propery is populated properly', () => {
       
      expect(bob.getOfficeNum()).toBe("15115");
    });
  });



});