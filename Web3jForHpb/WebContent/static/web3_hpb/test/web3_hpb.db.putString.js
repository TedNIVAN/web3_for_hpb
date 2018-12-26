var chai = require('chai');
var web3_hpb = require('../index');
<<<<<<< HEAD
var testMethod = require('./helpers/test.method.js');

var method = 'putString';

var tests = [{
    args: ['myDB', 'myKey', 'myValue'],
    formattedArgs: ['myDB', 'myKey', 'myValue'],
    result: true,
    formattedResult: true,
    call: 'db_'+ method
}];

testMethod.runTests('db', method, tests);
=======
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
>>>>>>> branch 'master' of https://github.com/wgllele/web3_for_hpb.git

