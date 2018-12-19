
[PCString](http://pandaclouds.com)
=========

`PCString` is a lightweight JavaScript library for Node.js that provides additional String methods.


Installation
------------

1. If you want to use this library, you first need to install the [Node.js] (https://nodejs.org/en/).

2. When you install node.js, will also be installed [npm] (https://www.npmjs.com/).

3. Please run the following command.

```
npm install --save @panda-clouds/string
```

Usage
-----

### Node.js

```javascript
const PCString = require('@panda-clouds/string');

// example usage
PCString.isString('yup!'); // => true;
PCString.hasWhitespace('ABC'); // => false;
```

You can replace PCString with any variable.


Methods
-------

[Unit Tests] are an additional resource for learning functionality.

### - isString(string)

Returns whether a given object is a String.

Example:

```javascript
PCString.isString('ABC') // => true
PCString.isString(5) // => false
PCString.isString({}) // => false
PCString.isString([]) // => false
```

### - hasWhiteSpace(string)

returns true if the string has white space, false if not.


Example:

```javascript
PCString.hasWhitespace(' ') // => true
PCString.hasWhitespace('A B') // => true
PCString.hasWhitespace('AB') // => false
PCString.hasWhitespace('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-!@#$%^&*()') // => false
```


### - removeWhitespace(string)

Removes all white characters from the given string.

Example:

```javascript
PCString.removeWhitespace(' A B  C   D    ') // => 'ABCD'
PCString.removeWhitespace('	A	B	C			D	') // => 'ABCD'
PCString.removeWhitespace('\nA\nB\n\nC\n\n\nD\n\n\n\n') // => 'ABCD'
PCString.removeWhitespace(null) // => ''
```

### - domainSafeString(string)

Removes all non-domain-safe characters.

Example:

```javascript
PCString.domainSafeString('_A_B__C___D____') // => 'ABCD'
PCString.domainSafeString('	A	B	C			D	') // => 'ABCD'
PCString.domainSafeString('\nA\nB\n\nC\n\n\nD\n\n\n\n') // => 'ABCD'
PCString.domainSafeString(null) // => ''
```


Contributions
-------------

Contribution checklist:
- modify `PCString.js`
- add unit tests in `PCString.spec.js`
- run `npm test`
- document method in `README.md`
- add your name to 'Contributors' in `README.md`


### Contributors

(Add your name)

- [*] [Marc Smith](https://github.com/mrmarcsmith)


License
-------

Licensed under MIT.

Copyright (C) 2018 Panda Clouds LLC <hello@pandaclouds.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.




[Unit Tests]: https://github.com/panda-clouds/string/blob/master/spec/PCString.spec.js
