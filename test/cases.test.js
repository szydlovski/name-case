module.exports = [
  {
    nameString: 'lowerCamelCase',
    caseName: 'lowercamel',
    nameWords: ['lower', 'camel', 'case'],
    reformat: [
      {
        nameString: 'LowerCamelCase',
        caseName: 'uppercamel'
      },
      {
        nameString: 'LOWER_CAMEL_CASE',
        caseName: 'uppersnake'
      },
      {
        nameString: 'lower-camel-case',
        caseName: 'lowerdash'
      },
    ]
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
  {
    nameString: 'lower_snake_case',
    caseName: 'lowersnake',
    nameWords: ['lower', 'snake', 'case']
  },
  {
    nameString: 'lower_snake_case1',
    caseName: 'lowersnake',
    nameWords: ['lower', 'snake', 'case1']
  },
  {
    nameString: 'UPPER_SNAKE_CASE',
    caseName: 'uppersnake',
    nameWords: ['upper', 'snake', 'case']
  },
  {
    nameString: 'UPPER_SNAKE_CASE1',
    caseName: 'uppersnake',
    nameWords: ['upper', 'snake', 'case1']
  },
  {
    nameString: 'lower-dash-case',
    caseName: 'lowerdash',
    nameWords: ['lower', 'dash', 'case']
  },
  {
    nameString: 'lower-dash-case1',
    caseName: 'lowerdash',
    nameWords: ['lower', 'dash', 'case1']
  },
  {
    nameString: 'UPPER-DASH-CASE',
    caseName: 'upperdash',
    nameWords: ['upper', 'dash', 'case']
  },
  {
    nameString: 'UPPER-DASH-CASE1',
    caseName: 'upperdash',
    nameWords: ['upper', 'dash', 'case1']
  },
  {
    nameString: '0notavalidcase',
    caseName: undefined
  },

]