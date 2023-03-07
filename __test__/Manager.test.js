const Manager = require('../lib/Manager.js');

const bob = new Manager("bob", "14", "bobman@gmail.com", "15115");

describe('Manager', () => { // this tests the manager for data return and make sure the functions are returning the right values
  describe("checks each propery in the manager class for correct returned values" , () => {
    it('Testing all the properties in order to determine correct returns' , () => {
      expect(bob.name).toBe("bob");
      expect(bob.id).toBe("14");
      expect(bob.email).toBe("bobman@gmail.com");
      expect(bob.officeNumber).toBe("15115");
    });
  });


    describe('Check the Manager class to ensure the data is populated correctly', () => {
      
      it(' Tests the Manager getName fucntion is working', () => {
        expect(bob.getName()).toBe("bob");
      });

  });
  describe("Tests the Manager id property", () => {
    it('Check if the get idfunction is working', () => {
        
      expect(bob.getId()).toBe("14");
    });
  });
  describe("Tests the Manager email property", () => {
    it('Check if the get email function is working', () => {
       
      expect(bob.getEmail()).toBe("bobman@gmail.com");
    });
  });
 describe("Tests the Manager officenumber property", () => {
    it('Check if the getOfficeNum function is working', () => {
       
      expect(bob.getOfficeNum()).toBe("15115");
    });
  });



});