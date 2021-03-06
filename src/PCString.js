class PCString {
	static isString(o) {
		if (o === null) {
			return false;
		}

		return typeof o == 'string' || (typeof o == 'object' && o.constructor === String);
	}

	static hasWhitespace(string) {
		if (!string) {
			return false;
		}

		return string.indexOf(' ') >= 0;
	}

	static escapeJSON(string) {
		if (!string) {
			return '';
		}

		return string
			.replace(/\n/g, '\\n')
			.replace(/\t/g, '\\t')
			.replace(/"/g, '\\"');
		// .replace(/'/g, "\\'")
		// .replace(/&/g, '\\&')
		// .replace(/\r/g, '\\r')
		// .replace(/\\b/g, '\\b')
		// .replace(/\f/g, '\\f');
	}

	static removeWhitespace(string) {
		if (!string) {
			return '';
		}

		return string.replace(/\s+/g, '');
	}

	static domainSafeString(string) {
		if (!string) {
			return '';
		}

		return string.toLowerCase().replace(/[^a-z0-9-]/g, '');
	}

	// this function makes sure that the first letter isn't a number
	static randomId(input) {
		let length;

		if (input) {
			length = input;
		} else {
			length = 10;
		}

		let text = PCString.randomChar('abcdefghijklmnopqrstuvwxyz');

		for (let i = 0; i < length - 1; i++) {
			text += PCString.randomChar('abcdefghijklmnopqrstuvwxyz0123456789');
		}

		return text;
	}

	static randomString(input) {
		let length;
		let text = '';

		if (input) {
			length = input;
		} else {
			length = 10;
		}

		for (let i = 0; i < length; i++) {
			text += PCString.randomChar('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
		}

		return text;
	}

	static randomChar(input) {
		let characters;

		if (input) {
			characters = input;
		} else {
			characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		}

		return characters.charAt(Math.floor(Math.random() * characters.length));
	}

	static toAlphaLower(str) {
		if (!str) {
			return '';
		}

		return str.toLowerCase().replace(/[^a-z]/g, '');
	}
}

module.exports = PCString;
