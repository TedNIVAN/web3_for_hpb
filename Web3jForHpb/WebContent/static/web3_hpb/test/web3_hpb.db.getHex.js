<<<<<<< HEAD
var testMethod = require('./helpers/test.method.js');

var method = 'getHex';

var tests = [{
    args: ['myDB', 'myKey'],
    formattedArgs: ['myDB', 'myKey'],
    result: '0xf',
    formattedResult: '0xf',
    call: 'db_'+ method
}];

testMethod.runTests('db', method, tests);
=======
var testMhpbod = require('./helpers/test.method.js');

var method = 'getHex';

var tests = [{
    args: ['myDB', 'myKey'],
    formattedArgs: ['myDB', 'myKey'],
    result: '0xf',
    formattedResult: '0xf',
    call: 'db_'+ method
}];

testMhpbod.runTests('db', method, tests);
>>>>>>> branch 'master' of https://github.com/wgllele/web3_for_hpb.git

