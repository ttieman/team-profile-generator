const Engineer = require('../lib/Engineer');


describe('Engineer', () => {
    describe('Check the employee class to ensure the data is populated correctly', () => {
      
      it(' Tests the Employee Name property', () => {
        const bob = new Engineer("bob", "14", "bobman@gmail.com");
        expect(bob.name).toBe("bob");
      });

  });
  describe("Tests the Engineer id property", () => {
    it('Check if the id propery is populated properly', () => {
        const bob = new Engineer("bob", "14", "bobman@gmail.com", "bobTech");
      expect(bob.id).toBe("14");
    });
  });
  describe("Tests the Engineer email property", () => {
    it('Check if the email propery is populated properly', () => {
        const bob = new Engineer("bob", "14", "bobman@gmail.com", "bobTech");
      expect(bob.email).toBe("bobman@gmail.com");
    });
  });
 describe("Tests the Engineer github property", () => {
    it('Check if the id propery is populated properly', () => {
        const bob = new Engineer("bob", "14", "bobman@gmail.com", "bobTech");
      expect(bob.github).toBe("bobTech");
    });
  });



});