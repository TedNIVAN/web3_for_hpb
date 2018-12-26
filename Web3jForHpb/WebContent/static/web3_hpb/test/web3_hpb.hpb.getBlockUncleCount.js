var chai = require('chai');
var web3_hpb = require('../index');
var method = 'getBlockUncleCount';
<<<<<<< HEAD
var testMethod = require('./helpers/test.method.js');


var tests = [{
    args: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855'],
    formattedArgs: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855'],
    result: '0xb',
    formattedResult: 11,
    call: 'hpb_getUncleCountByBlockHash'
},{
    args: [436],
    formattedArgs: ['0x1b4'],
    result: '0xb',
    formattedResult: 11,
    call: 'hpb_getUncleCountByBlockNumber'
},{
    args: ['pending'],
    formattedArgs: ['pending'],
    result: '0xb',
    formattedResult: 11,
    call: 'hpb_getUncleCountByBlockNumber'
}];

testMethod.runTests('hpb', method, tests);
=======
var testMhpbod = require('./helpers/test.method.js');


var tests = [{
    args: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855'],
    formattedArgs: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855'],
    result: '0xb',
    formattedResult: 11,
    call: 'hpb_getUncleCountByBlockHash'
},{
    args: [436],
    formattedArgs: ['0x1b4'],
    result: '0xb',
    formattedResult: 11,
    call: 'hpb_getUncleCountByBlockNumber'
},{
    args: ['pending'],
    formattedArgs: ['pending'],
    result: '0xb',
    formattedResult: 11,
    call: 'hpb_getUncleCountByBlockNumber'
}];

testMhpbod.runTests('hpb', method, tests);
>>>>>>> branch 'master' of https://github.com/wgllele/web3_for_hpb.git
