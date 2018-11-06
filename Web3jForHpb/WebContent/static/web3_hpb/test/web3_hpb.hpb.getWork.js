var chai = require('chai');
var web3_hpb = require('../index');
var testMhpbod = require('./helpers/test.method.js');

var method = 'getWork';

var tests = [{
    args: [],
    formattedArgs: [],
    result: true,
    formattedResult: true,
    call: 'hpb_'+ method
}];

testMhpbod.runTests('hpb', method, tests);

