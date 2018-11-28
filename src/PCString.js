class PCString  {

	constructor() {
		//Empty Constructor
	}

	static stringWithWhitespacesRemoved(string){
		if(!string) return '';
		return string.replace(/\s+/g, '');
	}

	// wrapper
	static domainSafeString(string){
		return PCString.stringWithOnlyLowercaseLettersHyphensAndNumbers(string);
	}

	static stringWithOnlyLowercaseLettersHyphensAndNumbers(string) {
		if(!string) return '';
		return string.toLowerCase().replace(/[^a-z0-9\-]/g, '');
		// removed case insensitivity (i) because we use toLowerCase() before
		// return string.toLowerCase().replace(/[^a-z0-9\-]/gi, '');
	}

	static isString(o) {
		if(o === null) return false;
		return typeof o == "string" || (typeof o == "object" && o.constructor === String);
	}

	static hasWhiteSpace(s) {
		return s.indexOf(' ') >= 0;
	}
}

module.exports = PCString;
// function() {
// 	PCString = PCString;
// }
