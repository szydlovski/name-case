const transforms = require('./transforms.js');
const NameCaseError = require('./NameCaseError.js');

function escapeRegExp(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

const nameCases = [
	{
		name: 'lowerCamel',
		pattern: /^[a-z]+((\d)|([A-Z0-9][a-z0-9]+))*([a-z])?$/,
		parse: (name) => name.replace(/([A-Z])/g, ' $1').split(' '),
		format: (words) =>
			words.map(transforms.camelize).join(''),
	},
	{
		name: 'upperCamel',
		pattern: /^([A-Z]([a-z0-9])+)+$/,
		parse: (name) =>
			name
				.replace(/((?!^)[A-Z])/g, ' $1')
				.split(' ')
				.filter((word) => word !== ''),
		format: (words) => words.map(transforms.capitalize).join(''),
	},
	...[
		['words', ' '],
		['snake', '_'],
		['dash', '-'],
		['dot', '.'],
		['doner', '|'],
	].flatMap(([caseName, glue]) =>
		[
			['upper', transforms.upper, `^[A-Z][A-Z0-9]*(?:{{glue}}[A-Z0-9]+)*$`],
			['lower', transforms.lower, `^[a-z][a-z0-9]*(?:{{glue}}[a-z0-9]+)*$`],
			['capital', transforms.capitalize, `^[A-Z][a-z0-9]*(?:{{glue}}[A-Z][a-z0-9]*)*$`],
			['camel', transforms.camelize, `^[a-z][a-z0-9]*(?:{{glue}}[A-Z][a-z0-9]*)*$`],
			['sentence', transforms.sentencify, `^[A-Z][a-z0-9]*(?:{{glue}}[a-z][a-z0-9]*)*$`],
		].map(([prefix, transform, pattern]) => ({
			name: prefix + transforms.capitalize(caseName),
			pattern: new RegExp(pattern.replace('{{glue}}', escapeRegExp(glue))),
			parse: (name) => name.split(glue),
			format: (words) => words.map(transform).join(glue),
		}))
	),
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
		(nameCase) => nameCase.name.toLowerCase() === targetNameCase
	);
	if (nameCase === undefined) {
		throw new NameCaseError(`Name case not supported: ${targetNameCase}`);
	}
	return nameCase;
}

function getSupportedNameCases() {
	return nameCases.map(({ name }) => name);
}

module.exports = {
	findNameCaseByMatch,
	findNameCaseByName,
	getSupportedNameCases,
};
