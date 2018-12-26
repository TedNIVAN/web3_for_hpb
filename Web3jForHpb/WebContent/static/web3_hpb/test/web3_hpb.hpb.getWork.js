var chai = require('chai');
var web3_hpb = require('../index');
<<<<<<< HEAD
var testMethod = require('./helpers/test.method.js');

var method = 'getWork';

var tests = [{
    args: [],
    formattedArgs: [],
    result: true,
    formattedResult: true,
    call: 'hpb_'+ method
}];

testMethod.runTests('hpb', method, tests);
=======
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
>>>>>>> branch 'master' of https://github.com/wgllele/web3_for_hpb.git

