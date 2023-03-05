const Engineer = require('../lib/Engineer');

const bob = new Engineer("bob", "14", "bobman@gmail.com",'bobTech');

describe('Engineer', () => {
    describe('Check the employee class to ensure the data is populated correctly', () => {
      
      it(' Tests the Employee Name property', () => {
        expect(bob.getName()).toBe("bob");
      });

  });
  describe("Tests the Engineer id property", () => {
    it('Check if the id propery is populated properly', () => {
        
      expect(bob.getId()).toBe("14");
    });
  });
  describe("Tests the Engineer email property", () => {
    it('Check if the email propery is populated properly', () => {
        
      expect(bob.getEmail()).toBe("bobman@gmail.com");
    });
  });
 describe("Tests the Engineer github property", () => {
    it('Check if the id propery is populated properly', () => {
        
      expect(bob.getGitHub()).toBe("bobTech");
    });
  });



});