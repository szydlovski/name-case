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
|`lowersnake` |`lower_snake_case`|
|`uppersnake` |`UPPER_SNAKE_CASE`|
|`lowerdash` |`lower-dash-case`|
|`upperdash` |`UPPER-DASH-CASE`|

# TODO

- Add more name cases
