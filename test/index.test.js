const { expect } = require('chai');

const NameCaseError = require('../src/NameCaseError.js');
const nameCase = require('../src/index.js');
const transforms = require('../src/transforms.js')
const { getSupportedNameCases } = require('../src/nameCases.js');
const allTestCases = require('./cases.test.js');
const validTestCases = allTestCases.filter(
	({ caseName }) => caseName !== undefined
);
const invalidTestCases = allTestCases.filter(
	({ caseName }) => caseName === undefined
);

describe('detectNameCase', function () {
	context('detects cases of valid names', function () {
		for (const caseName of getSupportedNameCases()) {
			const testCases = allTestCases.filter(
				(testCase) => testCase.caseName === caseName
			);
			it(caseName, function () {
				for (const { nameString } of testCases) {
					expect(nameCase.detect(nameString)).to.equal(caseName);
				}
			});
		}
	});
	it('returns undefined if the case is not valid', function () {
		for (const { nameString } of invalidTestCases) {
			expect(nameCase.detect(nameString)).to.equal(undefined);
		}
  });
  it('throws an error if the argument is not a string', function () {
		expect(function () {
			nameCase.detect(1);
		}).to.throw(TypeError, 'Can only detect the name case of strings, got');
	});
});

describe('parseNameCase', function () {
	it('parses words from valid names', function () {
		for (const { nameString, nameWords } of validTestCases) {
			expect(nameCase.parse(nameString)).to.deep.equal(nameWords);
		}
	});
	it('throws an error if the name is not valid', function () {
		for (const { nameString } of invalidTestCases) {
			expect(function () {
				nameCase.parse(nameString);
			}).to.throw(NameCaseError, 'Could not identify name case');
		}
  });
  it('throws an error if the argument is not a string', function () {
		expect(function () {
			nameCase.parse(1);
		}).to.throw(TypeError, 'Can only parse words from strings, got');
	});
});

describe('formatNameCase', function () {
	it('formats word arrays into a cased name', function () {
		for (const { nameString, nameWords, caseName } of validTestCases) {
			expect(nameCase.format(nameWords, caseName)).to.equal(nameString);
		}
	});
	it('throws an error if requested name case is not supported', function () {
		expect(function () {
			nameCase.format(['word', 'another'], 'unsupportednamecase');
		}).to.throw(NameCaseError, 'Name case not supported');
	});
});

describe('reformatNameCase', function () {
	it('reformats cased names into a different case', function () {
		const testCases = allTestCases
			.filter((testCase) => testCase.reformat !== undefined)
			.flatMap((testCase) =>
				testCase.reformat.map((reformat) => ({
          originalString: testCase.nameString,
          expectedString: reformat.nameString,
          caseName: reformat.caseName
				}))
			);
		for (const { originalString, expectedString, caseName } of testCases) {
			expect(nameCase.reformat(originalString, caseName)).to.equal(expectedString);
		}
	});
	it('throws an error if requested name case is not supported', function () {
		expect(function () {
			nameCase.reformat('someName', 'unsupportednamecase');
		}).to.throw(NameCaseError, 'Name case not supported');
	});
	it('throws an error if the name is not valid', function () {
		expect(function () {
			nameCase.reformat('inVALIDname', 'lowercamel');
		}).to.throw(NameCaseError, 'Could not identify name case');
	});
});

describe('validateNameCase', function () {
	it('validates whether a name is written in a given name case', function () {
		for (const { nameString, caseName } of validTestCases) {
			expect(nameCase.validate(nameString, caseName)).to.be.true;
		}
	});
	it('returns false if the name is not valid', function () {
    const supportedCases = getSupportedNameCases();
    for (const caseName of supportedCases) {
      for (const {nameString} of invalidTestCases) {
        expect(nameCase.validate(nameString, caseName)).to.be.false;
      }
    }
  });
  it('throws an error if requested name case is not supported', function () {
		expect(function () {
			nameCase.validate('someName', 'unsupportednamecase');
		}).to.throw(NameCaseError, 'Name case not supported');
	});
  it('throws an error if the first argument is not a string', function () {
		expect(function () {
			nameCase.validate(1, 'unsupportednamecase');
		}).to.throw(TypeError, 'Can only validate the name case of strings, got');
	});
});

describe('transforms', function() {
	const {capitalize, lower, upper, camelize, sentencify} = transforms;
	describe('capitalize', function() {
		it('capitalizes the first letter of a string', function() {
			expect(capitalize('hello')).to.equal('Hello');
		})
	})
	describe('lower', function() {
		it('transforms a string to lowercase', function() {
			expect(lower('HELLO')).to.equal('hello');
		})
	})
	describe('upper', function() {
		it('transforms a string to uppercase', function() {
			expect(upper('hello')).to.equal('HELLO');
		})
	})
	describe('camelize', function() {
		it('when used as a map function, capitalizes all strings in an array except the first one', function() {
			expect(['one', 'two', 'three'].map(camelize)).to.deep.equal(['one', 'Two', 'Three']);
		})
	})
	describe('sentencify', function() {
		it('when used as a map function, capitalizes the first string in an array', function() {
			expect(['one', 'two', 'three'].map(sentencify)).to.deep.equal(['One', 'two', 'three']);
		})
	})
})

// detectNameCase,
// parseNameCase,
// formatNameCase,
// reformatNameCase,
// validateNameCase,
