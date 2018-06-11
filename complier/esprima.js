var esprima = require('esprima');
var program = 'const answer = 42';

console.log(esprima.tokenize(program))

console.log(esprima.parseScript(program))

