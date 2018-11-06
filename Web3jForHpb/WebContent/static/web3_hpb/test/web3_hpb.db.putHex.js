var chai = require('chai');
var web3_hpb = require('../index');
var testMhpbod = require('./helpers/test.method.js');

var method = 'putHex';

var tests = [{
    args: ['myDB', 'myKey', '0xb'],
    formattedArgs: ['myDB', 'myKey', '0xb'],
    result: true,
    formattedResult: true,
    call: 'db_'+ method
}];

testMhpbod.runTests('db', method, tests);

