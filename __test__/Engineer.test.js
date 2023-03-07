const Engineer = require('../lib/Engineer');

const bob = new Engineer("bob", "14", "bobman@gmail.com",'bobTech');

describe('Engineer', () => { // this tests the engineer for data return and make sure the functions are returning the right values
  describe("checks each propery in the Engineer class for correct returned values" , () => {
    it('Testing all the properties in order to determine correct returns' , () => {
      expect(bob.name).toBe("bob");
      expect(bob.id).toBe("14");
      expect(bob.email).toBe("bobman@gmail.com");
      expect(bob.github).toBe("bobTech");
    });
  });

    describe('Check the Engineer class to ensure the data is populated correctly', () => {
      
      it(' Tests the Engineer get name function', () => {
        expect(bob.getName()).toBe("bob");
      });

  });
  describe("Tests the Engineer id property", () => {
    it('Checks if the Engineer get id function is working', () => {
        
      expect(bob.getId()).toBe("14");
    });
  });
  describe("Tests the Engineer email property", () => {
    it('Check if the get email function is working', () => {
        
      expect(bob.getEmail()).toBe("bobman@gmail.com");
    });
  });
 describe("Tests the Engineer github property", () => {
    it('Check if the getGithub function is working  ', () => {
        
      expect(bob.getGitHub()).toBe("bobTech");
    });
  });



});