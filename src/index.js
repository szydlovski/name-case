const transforms = require('./transforms.js');

const {
  findNameCaseByMatch,
  findNameCaseByName
} = require('./nameCases.js');

function reformatNameCase(inputString, targetNameCase) {
	const words = parseNameCase(inputString);
	return formatNameCase(words, targetNameCase);
}

function formatNameCase(words, targetNameCase) {
	const nameCase = findNameCaseByName(targetNameCase);
	words = words.map(transforms.lower);
	return nameCase.format(words);
}

function parseNameCase(inputString) {
	if (typeof inputString !== 'string') {
		throw new TypeError(
			`Can only parse words from strings, got ${typeof inputString} instead.`
		);
	}
	inputString = inputString.trim();
	const nameCase = findNameCaseByMatch(inputString);
	return nameCase.parse(inputString).map(transforms.lower);
}

function validateNameCase(inputString, declaredNameCase) {
	if (typeof inputString !== 'string') {
		throw new TypeError(
			`Can only validate the name case of strings, got ${typeof inputString} instead.`
		);
	}
	inputString = inputString.trim();
	const nameCase = findNameCaseByName(declaredNameCase);
	return nameCase.pattern.test(inputString);
}

function detectNameCase(inputString) {
	if (typeof inputString !== 'string') {
		throw new TypeError(
			`Can only detect the name case of strings, got ${typeof inputString} instead.`
		);
	}
	inputString = inputString.trim();
	try {
		return findNameCaseByMatch(inputString).name;
	} catch (error) {
		return undefined;
	}
}

module.exports = {
	detectNameCase,
	parseNameCase,
	formatNameCase,
	reformatNameCase,
	validateNameCase,
	detect: detectNameCase,
	parse: parseNameCase,
	format: formatNameCase,
	reformat: reformatNameCase,
	validate: validateNameCase
};
