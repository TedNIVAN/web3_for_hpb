var chai = require('chai');
var web3_hpb = require('../index');
var testMhpbod = require('./helpers/test.method.js');

var method = 'putString';

var tests = [{
    args: ['myDB', 'myKey', 'myValue'],
    formattedArgs: ['myDB', 'myKey', 'myValue'],
    result: true,
    formattedResult: true,
    call: 'db_'+ method
}];

testMhpbod.runTests('db', method, tests);

