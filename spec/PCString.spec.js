const PCString = require('../src/PCString.js');

describe('test PCString.isString', () => {
	it('returns false when given number', () => {
		expect.assertions(1);
		const string = 5;
		const boolResults = PCString.isString(string);

		expect(boolResults).toBe(false);
	});

	it('returns false when given a undefined', () => {
		expect.assertions(1);
		// eslint-disable-next-line no-undefined
		const string = undefined;
		const boolResults = PCString.isString(string);

		expect(boolResults).toBe(false);
	});

	it('returns false when given a null', () => {
		expect.assertions(1);
		const string = null;
		const boolResults = PCString.isString(string);

		expect(boolResults).toBe(false);
	});

	it('returns false when given an object', () => {
		expect.assertions(1);
		const string = {};
		const boolResults = PCString.isString(string);

		expect(boolResults).toBe(false);
	});

	it('returns false when given an array', () => {
		expect.assertions(1);
		const string = [];
		const boolResults = PCString.isString(string);

		expect(boolResults).toBe(false);
	});

	it('returns false when given a Date', () => {
		expect.assertions(1);
		const string = new Date();
		const boolResults = PCString.isString(string);

		expect(boolResults).toBe(false);
	});

	it('returns true when given a string', () => {
		expect.assertions(1);
		const string = 'hello';
		const boolResults = PCString.isString(string);

		expect(boolResults).toBe(true);
	});
});

describe('test PCString.hasWhitespace', () => {
	it('should return false when null', () => {
		expect.assertions(1);
		const string = null;
		const boolResults = PCString.hasWhitespace(string);

		expect(boolResults).toBe(false);
	});

	it('should detect only spaces', () => {
		expect.assertions(1);
		const string = ' ';
		const boolResults = PCString.hasWhitespace(string);

		expect(boolResults).toBe(true);
	});

	it('should detect leading spaces', () => {
		expect.assertions(1);
		const string = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const boolResults = PCString.hasWhitespace(string);

		expect(boolResults).toBe(true);
	});

	it('should detect trailing spaces', () => {
		expect.assertions(1);
		const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
		const boolResults = PCString.hasWhitespace(string);

		expect(boolResults).toBe(true);
	});

	it('should detect single spaces', () => {
		expect.assertions(1);
		const string = 'A BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const boolResults = PCString.hasWhitespace(string);

		expect(boolResults).toBe(true);
	});

	it('should detect multiple spaces', () => {
		expect.assertions(1);
		const string = ' A B  C   D    ';
		const boolResults = PCString.hasWhitespace(string);

		expect(boolResults).toBe(true);
	});

	it('should not false positive', () => {
		expect.assertions(1);
		const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-!@#$%^&*()';
		const boolResults = PCString.hasWhitespace(string);

		expect(boolResults).toBe(false);
	});
});

describe('test PCString.removeWhitespace', () => {
	it('should replace spaces', () => {
		expect.assertions(1);
		const string = ' A B  C   D    ';
		const newString = PCString.removeWhitespace(string);

		expect(newString).toBe('ABCD');
	});

	it('should replace tabs', () => {
		expect.assertions(1);
		const string = '	A	B		C			D				';
		const newString = PCString.removeWhitespace(string);

		expect(newString).toBe('ABCD');
	});

	it('should replace new lines', () => {
		expect.assertions(1);
		const string = '\nA\nB\n\nC\n\n\nD\n\n\n\n';
		const newString = PCString.removeWhitespace(string);

		expect(newString).toBe('ABCD');
	});

	it('should handle null', () => {
		expect.assertions(1);
		const string = null;
		const newString = PCString.removeWhitespace(string);

		expect(newString).toBe('');
	});
});

describe('test PCString.domainSafeString', () => {
	it('should replace underscores', () => {
		expect.assertions(1);
		const string = '_A_B__C___D____';
		const newString = PCString.domainSafeString(string);

		expect(newString).toBe('abcd');
	});


	it('should replace spaces', () => {
		expect.assertions(1);
		const string = ' A B  C   D    ';
		const newString = PCString.domainSafeString(string);

		expect(newString).toBe('abcd');
	});

	it('should replace tabs', () => {
		expect.assertions(1);
		const string = '  A B   C     D       ';
		const newString = PCString.domainSafeString(string);

		expect(newString).toBe('abcd');
	});

	it('should replace new lines', () => {
		expect.assertions(1);
		const string = '\nA\nB\n\nC\n\n\nD\n\n\n\n';
		const newString = PCString.domainSafeString(string);

		expect(newString).toBe('abcd');
	});


	it('should replace new "My Cool Domain"', () => {
		expect.assertions(1);
		const string = 'My Cool Domain';
		const newString = PCString.domainSafeString(string);

		expect(newString).toBe('mycooldomain');
	});

	it('should leave hyphens alone', () => {
		expect.assertions(1);
		const string = 'My-Cool-Domain';
		const newString = PCString.domainSafeString(string);

		expect(newString).toBe('my-cool-domain');
	});

	it('should handle null', () => {
		expect.assertions(1);
		const string = null;
		const newString = PCString.domainSafeString(string);

		expect(newString).toBe('');
	});
});

describe('test PCString.randomId', () => {
	it('returns random string with no input', () => {
		expect.assertions(1);
		const results = PCString.randomId();

		expect(results).toHaveLength(10);
	});

	it('returns random string with an input of 0', () => {
		expect.assertions(1);
		const results = PCString.randomId(0);

		expect(results).toHaveLength(10);
	});

	it('returns random string with an input of 1', () => {
		expect.assertions(1);
		const results = PCString.randomId(1);

		expect(results).toHaveLength(1);
	});

	it('returns random string with an input of 2', () => {
		expect.assertions(1);
		const results = PCString.randomId(2);

		expect(results).toHaveLength(2);
	});

	it('returns random string with an input of 3', () => {
		expect.assertions(1);
		const results = PCString.randomId(3);

		expect(results).toHaveLength(3);
	});

	it('returns random string with an input of 4', () => {
		expect.assertions(1);
		const results = PCString.randomId(4);

		expect(results).toHaveLength(4);
	});

	it('returns random string with an input of 5', () => {
		expect.assertions(1);
		const results = PCString.randomId(5);

		expect(results).toHaveLength(5);
	});

	it('returns random string with an input of 6', () => {
		expect.assertions(1);
		const results = PCString.randomId(6);

		expect(results).toHaveLength(6);
	});

	it('returns random string with an input of 7', () => {
		expect.assertions(1);
		const results = PCString.randomId(7);

		expect(results).toHaveLength(7);
	});

	it('returns random string with an input of 8', () => {
		expect.assertions(1);
		const results = PCString.randomId(8);

		expect(results).toHaveLength(8);
	});

	it('returns random string with an input of 9', () => {
		expect.assertions(1);
		const results = PCString.randomId(9);

		expect(results).toHaveLength(9);
	});

	it('returns random string with an input of 10', () => {
		expect.assertions(1);
		const results = PCString.randomId(10);

		expect(results).toHaveLength(10);
	});

	it('returns random string with an input of 11', () => {
		expect.assertions(1);
		const results = PCString.randomId(11);

		expect(results).toHaveLength(11);
	});

	it('returns random string with an input of 12', () => {
		expect.assertions(1);
		const results = PCString.randomId(12);

		expect(results).toHaveLength(12);
	});
});

describe('test PCString.randomChar', () => {
	it('returns random string with no input', () => {
		expect.assertions(2);
		const results = PCString.randomChar();

		expect(results).toHaveLength(1);
		expect('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789').toContain(results);
	});

	it('returns random string with an input of c', () => {
		expect.assertions(2);
		const results = PCString.randomChar('c');

		expect(results).toHaveLength(1);
		expect(results).toBe(results);
	});

	it('returns random string with an input of mp', () => {
		expect.assertions(2);
		const results = PCString.randomChar('mp');

		expect(results).toHaveLength(1);
		expect('mp').toContain(results);
	});
});

