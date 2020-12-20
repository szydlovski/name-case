const { capitalize, toLowerCase, toUpperCase } = require('./helpers.js');
const NameCaseError = require('./NameCaseError.js');

const nameCases = [
	{
		name: 'lowercamel',
		pattern: /^[a-z]+((\d)|([A-Z0-9][a-z0-9]+))*([a-z])?$/,
		parse: (name) => name.replace(/([A-Z])/g, ' $1').split(' '),
		format: (words) =>
			[words[0], ...words.slice(1, words.length).map(capitalize)].join(''),
	},
	{
		name: 'uppercamel',
		pattern: /^([A-Z]([a-z0-9])+)+$/,
		parse: (name) =>
			name
				.replace(/((?!^)[A-Z])/g, ' $1')
				.split(' ')
				.filter((word) => word !== ''),
		format: (words) => words.map(capitalize).join(''),
	},
	{
		name: 'lowersnake',
		pattern: /^[a-z]([a-z0-9]+_[a-z0-9]+)+$/,
		parse: (name) => name.split('_'),
		format: (words) => words.join('_'),
	},
	{
		name: 'uppersnake',
		pattern: /^[A-Z]([A-Z0-9]+_[A-Z0-9]+)+$/,
		parse: (name) => name.split('_'),
		format: (words) => words.map(toUpperCase).join('_'),
	},
	{
		name: 'lowerdash',
		pattern: /^[a-z]([a-z0-9]+-[a-z0-9]+)+$/,
		parse: (name) => name.split('-'),
		format: (words) => words.map(toLowerCase).join('-'),
	},
	{
		name: 'upperdash',
		pattern: /^[A-Z]([A-Z0-9]+-[A-Z0-9]+)+$/,
		parse: (name) => name.split('-'),
		format: (words) => words.map(toUpperCase).join('-'),
	},
];

function findNameCaseByMatch(inputString) {
	const nameCase = nameCases.find((nameCase) =>
		nameCase.pattern.test(inputString)
	);
	if (nameCase === undefined) {
		throw new NameCaseError(`Could not identify name case: ${inputString}`);
	}
	return nameCase;
}

function findNameCaseByName(targetNameCase) {
	targetNameCase = targetNameCase.toLowerCase().trim();
	const nameCase = nameCases.find(
		(nameCase) => nameCase.name === targetNameCase
	);
	if (nameCase === undefined) {
		throw new NameCaseError(`Name case not supported: ${targetNameCase}`);
	}
	return nameCase;
}

function getSupportedNameCases() {
	return nameCases.map(({name}) => name);
}

module.exports = {
	findNameCaseByMatch,
	findNameCaseByName,
	getSupportedNameCases
};
