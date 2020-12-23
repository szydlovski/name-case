# name-case

Parse, detect, format and validate various name cases.

# Usage
```
npm install @szydlovski/name-cases
```
```javascript
const nameCases = require('@szydlovski/name-cases');

nameCases.detect('myVariableName') // "lowercamel"
nameCases.parse('myVariableName') // ["my", "variable", "name"]
nameCases.reformat('myVariableName', 'uppersnake') // "MY_VARIABLE_NAME"
nameCases.validate('myVariableName', 'lowercamel') // true
nameCases.format(['my', 'variable', 'name'], 'uppercamel') // MyVariableName
```

# Supported name cases


|Library string|Example|
|-------------|-------------|
|`lowercamel` |`lowerCamelCase`|
|`uppercamel` |`UpperCamelCase`|
|`upperwords` |`UPPER WORDS CASE`|
|`lowerwords` |`lower words case`|
|`capitalwords` |`Capital Words Case`|
|`camelwords` |`camel Words Case`|
|`sentencewords` |`Sentence words case`|
|`uppersnake` |`UPPER_SNAKE_CASE`|
|`lowersnake` |`lower_snake_case`|
|`capitalsnake` |`Capital_Snake_Case`|
|`camelsnake` |`camel_Snake_Case`|
|`sentencesnake` |`Sentence_snake_case`|
|`upperdash` |`UPPER-DASH-CASE`|
|`lowerdash` |`lower-dash-case`|
|`capitaldash` |`Capital-Dash-Case`|
|`cameldash` |`camel-Dash-Case`|
|`sentencedash` |`Sentence-dash-case`|
|`upperdot` |`UPPER.DOT.CASE`|
|`lowerdot` |`lower.dot.case`|
|`capitaldot` |`Capital.Dot.Case`|
|`cameldot` |`camel.Dot.Case`|
|`sentencedot` |`Sentence.dot.case`|
|`upperdoner` |`UPPER|DONER|CASE`|
|`lowerdoner` |`lower|doner|case`|
|`capitaldoner` |`Capital|Doner|Case`|
|`cameldoner` |`camel|Doner|Case`|
|`sentencedoner` |`Sentence|doner|case`|

# CHANGELOG


## [0.1.2] - 2020-12-23

### Added

- New name cases: words, dot and doner
- Variations of new and old cases: lower, upper, capital, camel, sentence
