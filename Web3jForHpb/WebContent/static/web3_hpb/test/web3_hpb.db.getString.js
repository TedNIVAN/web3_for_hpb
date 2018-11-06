var chai = require('chai');
var testMhpbod = require('./helpers/test.method.js');

var method = 'getString';

var tests = [{
    args: ['myDB', 'myKey'],
    formattedArgs: ['myDB', 'myKey'],
    result: 'myValue',
    formattedResult: 'myValue',
    call: 'db_'+ method
}];

testMhpbod.runTests('db', method, tests);

