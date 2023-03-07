const Intern = require("../lib/Intern");

const bob = new Intern("bob", "14", "bobman@gmail.com","asu");

describe('Intern', () => { // this tests the intern for data return and make sure the functions are returning the right values
  describe("checks each propery in the Intern class for correct returned values" , () => {
    it('Testing all the properties in order to determine correct returns' , () => {
      expect(bob.name).toBe("bob");
      expect(bob.id).toBe("14");
      expect(bob.email).toBe("bobman@gmail.com");
      expect(bob.school).toBe("asu");
    });
  });
  describe('Check the Intern class to ensure the data is populated correctly', () => {
    
    it(' Tests the Intern Name property', () => {
      expect(bob.getName()).toBe("bob");
    });


  });
  describe("Tests the Intern id property", () => {
    it('Check if the id propery is populated properly', () => {
      
      expect(bob.getId()).toBe("14");
    });
  });
  describe("Tests the Intern email property", () => {
    it('Check if the email propery is populated properly', () => {
      
      expect(bob.getEmail()).toBe("bobman@gmail.com");
    });
  });
  describe("Tests the Intern school property", () => {
    it('Check if the email propery is populated properly', () => {
     
      expect(bob.getSchool()).toBe("asu");
    });
  });



});