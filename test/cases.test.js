const transforms = require('../src/transforms.js');

module.exports = [
  {
    nameString: 'someExampleName',
    caseName: 'lowercamel',
    nameWords: ['some', 'example', 'name'],
    reformat: [
      {
        nameString: 'SomeExampleName',
        caseName: 'uppercamel'
      },
      {
        nameString: 'SOME_EXAMPLE_NAME',
        caseName: 'uppersnake'
      },
      {
        nameString: 'some_example_name',
        caseName: 'lowersnake'
      },
      {
        nameString: 'some-example-name',
        caseName: 'lowerdash'
      },
      {
        nameString: 'SOME-EXAMPLE-NAME',
        caseName: 'upperdash'
      },
      {
        nameString: 'some example name',
        caseName: 'lowerwords'
      },
      {
        nameString: 'SOME EXAMPLE NAME',
        caseName: 'upperwords'
      },
      {
        nameString: 'Some Example Name',
        caseName: 'capitalwords'
      },
      {
        nameString: 'some.example.name',
        caseName: 'lowerdot'
      },
      {
        nameString: 'SOME.EXAMPLE.NAME',
        caseName: 'upperdot'
      },
      {
        nameString: 'Some example name',
        caseName: 'sentencewords'
      },
    ]
  },
  {
    nameString: 'lowerCamelCase',
    caseName: 'lowercamel',
    nameWords: ['lower', 'camel', 'case'],
  },
  {
    nameString: 'l0werCamelCase',
    caseName: 'lowercamel',
    nameWords: ['l0wer', 'camel', 'case']
  },
  {
    nameString: 'UpperCamelCase',
    caseName: 'uppercamel',
    nameWords: ['upper', 'camel', 'case']
  },
  {
    nameString: 'UpperCamelCase1',
    caseName: 'uppercamel',
    nameWords: ['upper', 'camel', 'case1']
  },
  ...[
		['words', ' '],
		['snake', '_'],
		['dash', '-'],
		['dot', '.'],
		['doner', '|'],
	].flatMap(([caseType, glue]) =>
		[
			['upper', transforms.upper],
			['lower', transforms.lower],
			['capital', transforms.capitalize],
			['camel', transforms.camelize],
			['sentence', transforms.sentencify],
		].flatMap(([caseVariant, transform]) => [
      ['some', 'example', 'name']
    ].map(words => ({
      nameString: words.map(transform).join(glue),
			caseName: caseVariant + caseType,
			nameWords: [...words]			
		})))
	),
  {
    nameString: '0notavalidcase',
    caseName: undefined
  },

]