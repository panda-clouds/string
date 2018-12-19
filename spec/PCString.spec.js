const PCString = require("../src/PCString.js");

describe('PCString.isString', () => {

	it('returns false when given number', () => {
		const moneyString = 5;
		expect(PCString.isString(moneyString)).toBe(false);
	});

	it('returns false when given a undefined', () => {
		const string = undefined;
		expect(PCString.isString(string)).toBe(false);
	});

	it('returns false when given a null', () => {
		const string = null;
		expect(PCString.isString(string)).toBe(false);
	});

	it('returns false when given an object', () => {
		const string = {};
		expect(PCString.isString(string)).toBe(false);
	});

	it('returns false when given an array', () => {
		const string = [];
		expect(PCString.isString(string)).toBe(false);
	});

	it('returns true when given a string', () => {
		const string = "hello";
		expect(PCString.isString(string)).toBe(true);
	});
});

describe('PCString.removeWhitespace', () => {

	it('should replace spaces', () => {
		const string = " A B  C   D    ";
		const newString = PCString.removeWhitespace(string);
		expect(newString).toBe("ABCD");
	});

	it('should replace tabs', () => {
		const string = "	A	B		C			D				";
		const newString = PCString.removeWhitespace(string);
		expect(newString).toBe("ABCD");
	});

	it('should replace tabs', () => {
		const string = "	A	B		C			D				";
		const newString = PCString.removeWhitespace(string);
		expect(newString).toBe("ABCD");
	});

	it('should replace new lines', () => {
		const string = "\nA\nB\n\nC\n\n\nD\n\n\n\n";
		const newString = PCString.removeWhitespace(string);
		expect(newString).toBe("ABCD");
	});

	it('should handle null', () => {
		const string = null;
		const newString = PCString.removeWhitespace(string);
		expect(newString).toBe('');
	});


});

describe('PCString.domainSafeString', () => {

	it('should replace underscores', () => {
		const string = "_A_B__C___D____";
		const newString = PCString.domainSafeString(string);
		expect(newString).toBe("abcd");
	});


	it('should replace spaces', () => {
		const string = " A B  C   D    ";
		const newString = PCString.domainSafeString(string);
		expect(newString).toBe("abcd");
	});

	it('should replace tabs', () => {
		const string = "  A B   C     D       ";
		const newString = PCString.domainSafeString(string);
		expect(newString).toBe("abcd");
	});

	it('should replace tabs', () => {
		const string = "  A B   C     D       ";
		const newString = PCString.domainSafeString(string);
		expect(newString).toBe("abcd");
	});

	it('should replace new lines', () => {
		const string = "\nA\nB\n\nC\n\n\nD\n\n\n\n";
		const newString = PCString.domainSafeString(string);
		expect(newString).toBe("abcd");
	});


	it('should replace new "My Cool Domain"', () => {
		const string = "My Cool Domain";
		const newString = PCString.domainSafeString(string);
		expect(newString).toBe("mycooldomain");
	});

	it('should leave hyphens alone', () => {
		const string = "My-Cool-Domain";
		const newString = PCString.domainSafeString(string);
		expect(newString).toBe("my-cool-domain");
	});

	it('should handle null', () => {
		const string = null;
		const newString = PCString.domainSafeString(string);
		expect(newString).toBe('');
	});


});
describe('PCString.hasWhitespace', () => {

	it('should detect only spaces', () => {
		const string = " ";
		const newString = PCString.hasWhitespace(string);
		expect(newString).toBe(true);
	});

	it('should detect leading spaces', () => {
		const string = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		const newString = PCString.hasWhitespace(string);
		expect(newString).toBe(true);
	});

	it('should detect trailing spaces', () => {
		const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
		const newString = PCString.hasWhitespace(string);
		expect(newString).toBe(true);
	});

	it('should detect single spaces', () => {
		const string = "A BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		const newString = PCString.hasWhitespace(string);
		expect(newString).toBe(true);
	});

	it('should detect multiple spaces', () => {
		const string = " A B  C   D    ";
		const newString = PCString.hasWhitespace(string);
		expect(newString).toBe(true);
	});

	it('should not false positive', () => {
		const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-!@#$%^&*()";
		const newString = PCString.hasWhitespace(string);
		expect(newString).toBe(false);
	});
});

