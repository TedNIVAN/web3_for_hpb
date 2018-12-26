var chai = require('chai');
var assert = chai.assert;
<<<<<<< HEAD
var Method = require('../lib/web3_hpb/method');

describe('lib/web3_hpb/method', function () {
    describe('formatOutput', function () {
        it('should format plain output', function () {
            
            // given
            var formatter = function (args) {
                return args.map(function (arg) {
                    return arg + '*';
                });
            };
            
            var method = new Method({
                outputFormatter: formatter
            });
            var args = ['1','2','3'];
            var expectedArgs = ['1*', '2*', '3*'];

            // when
            var result = method.formatOutput(args);

            // then
            assert.deepEqual(result, expectedArgs);
        });
        
        it('should do nothing if there is no formatter', function () {

            // given
            var method = new Method({});
=======
var Mhpbod = require('../lib/web3_hpb/method');

describe('lib/web3_hpb/method', function () {
    describe('formatOutput', function () {
        it('should format plain output', function () {
            
            // given
            var formatter = function (args) {
                return args.map(function (arg) {
                    return arg + '*';
                });
            };
            
            var method = new Mhpbod({
                outputFormatter: formatter
            });
            var args = ['1','2','3'];
            var expectedArgs = ['1*', '2*', '3*'];

            // when
            var result = method.formatOutput(args);

            // then
            assert.deepEqual(result, expectedArgs);
        });
        
        it('should do nothing if there is no formatter', function () {

            // given
            var method = new Mhpbod({});
>>>>>>> branch 'master' of https://github.com/wgllele/web3_for_hpb.git
            var args = [1,2,3];

            // when
            var result = method.formatOutput(args);
            
            // then
            assert.deepEqual(result, args);
        });
    });
});

