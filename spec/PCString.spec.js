var fs = require('fs');
 
require("../src/PCString.js")();
 
describe('PCString.isString', () => {

    it('returns false when given number', () => {
      let moneyString = 5;
      expect(PCString.isString(moneyString)).toBe(false);  
    });

    it('returns false when given a undefined', () => {
      let string = undefined;
      expect(PCString.isString(string)).toBe(false);  
    });

    it('returns false when given a null', () => {
      let string = null;
      expect(PCString.isString(string)).toBe(false);  
    });

    it('returns false when given an object', () => {
      let string = {};
      expect(PCString.isString(string)).toBe(false);  
    });

    it('returns false when given an array', () => {
      let string = [];
      expect(PCString.isString(string)).toBe(false);  
    });

    it('returns true when given a string', () => {
      let string = "hello";
      expect(PCString.isString(string)).toBe(true);  
    });
});
describe('PCString.stringWithWhitespacesRemoved', () => {
 
    it('should replace spaces', () => {
      let string = " A B  C   D    ";

      let newString = PCString.stringWithWhitespacesRemoved(string);

      expect(newString).toBe("ABCD");
    });

    it('should replace tabs', () => {
      let string = "	A	B		C			D				";

      let newString = PCString.stringWithWhitespacesRemoved(string);

      expect(newString).toBe("ABCD");
    });

    it('should replace tabs', () => {
      let string = "	A	B		C			D				";

      let newString = PCString.stringWithWhitespacesRemoved(string);

      expect(newString).toBe("ABCD");
    });

    it('should replace new lines', () => {
      let string = "\nA\nB\n\nC\n\n\nD\n\n\n\n";

      let newString = PCString.stringWithWhitespacesRemoved(string);

      expect(newString).toBe("ABCD");
    });

    it('should handle null', () => {
      let string = null;

      let newString = PCString.stringWithWhitespacesRemoved(string);

      expect(newString).toBe('');
    });


});

describe('PCString.stringWithOnlyLowercaseLettersHyphensAndNumbers', () => {
  
    it('should replace underscores', () => {
      let string = "_A_B__C___D____";

      let newString = PCString.stringWithOnlyLowercaseLettersHyphensAndNumbers(string);

      expect(newString).toBe("abcd");
    });


    it('should replace spaces', () => {
      let string = " A B  C   D    ";

      let newString = PCString.stringWithOnlyLowercaseLettersHyphensAndNumbers(string);

      expect(newString).toBe("abcd");
    });

    it('should replace tabs', () => {
      let string = "  A B   C     D       ";

      let newString = PCString.stringWithOnlyLowercaseLettersHyphensAndNumbers(string);

      expect(newString).toBe("abcd");
    });

    it('should replace tabs', () => {
      let string = "  A B   C     D       ";

      let newString = PCString.stringWithOnlyLowercaseLettersHyphensAndNumbers(string);

      expect(newString).toBe("abcd");
    });

    it('should replace new lines', () => {
      let string = "\nA\nB\n\nC\n\n\nD\n\n\n\n";

      let newString = PCString.stringWithOnlyLowercaseLettersHyphensAndNumbers(string);

      expect(newString).toBe("abcd");
    });


    it('should replace new "My Cool Domain"', () => {
      let string = "My Cool Domain";

      let newString = PCString.stringWithOnlyLowercaseLettersHyphensAndNumbers(string);

      expect(newString).toBe("mycooldomain");
    });

    it('should leave hyphens alone', () => {
      let string = "My-Cool-Domain";

      let newString = PCString.stringWithOnlyLowercaseLettersHyphensAndNumbers(string);

      expect(newString).toBe("my-cool-domain");
    });

    it('should handle null', () => {
      let string = null;

      let newString = PCString.stringWithOnlyLowercaseLettersHyphensAndNumbers(string);

      expect(newString).toBe('');
    });


});
describe('PCString.hasWhiteSpace', () => {

    it('should detect only spaces', () => {
      let string = " ";

      let newString = PCString.hasWhiteSpace(string);

      expect(newString).toBe(true);
    });

    it('should detect leading spaces', () => {
      let string = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      let newString = PCString.hasWhiteSpace(string);

      expect(newString).toBe(true);
    });

    it('should detect trailing spaces', () => {
      let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";

      let newString = PCString.hasWhiteSpace(string);

      expect(newString).toBe(true);
    });

    it('should detect single spaces', () => {
      let string = "A BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      let newString = PCString.hasWhiteSpace(string);

      expect(newString).toBe(true);
    });

    it('should detect multiple spaces', () => {
      let string = " A B  C   D    ";

      let newString = PCString.hasWhiteSpace(string);

      expect(newString).toBe(true);
    });

    it('should not false positive', () => {
      let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-!@#$%^&*()";

      let newString = PCString.hasWhiteSpace(string);

      expect(newString).toBe(false);
    });

    


});

