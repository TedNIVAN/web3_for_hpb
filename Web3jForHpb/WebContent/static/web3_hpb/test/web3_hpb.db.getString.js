var chai = require('chai');
<<<<<<< HEAD
var testMethod = require('./helpers/test.method.js');

var method = 'getString';

var tests = [{
    args: ['myDB', 'myKey'],
    formattedArgs: ['myDB', 'myKey'],
    result: 'myValue',
    formattedResult: 'myValue',
    call: 'db_'+ method
}];

testMethod.runTests('db', method, tests);
=======
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
>>>>>>> branch 'master' of https://github.com/wgllele/web3_for_hpb.git

