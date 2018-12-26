var chai = require('chai');
var assert = chai.assert;
<<<<<<< HEAD
var Method = require('../lib/web3_hpb/method');

describe('lib/web3_hpb/method', function () {
    describe('extractCallback', function () {
        it('should extract callback', function () {
            
            // given
            var method = new Method({});
            var callback = function () { };
            var args = [1, callback]

            // when
            var result = method.extractCallback(args);

            // then
            assert.equal(args.length, 1);
            assert.equal(callback, result);
        });
        
        it('should extract callback created using newFunction', function () {
            
            // given
            var method = new Method({});
            var callback = new Function ();
            var args = [1, callback]

            // when
            var result = method.extractCallback(args);

            // then
            assert.equal(args.length, 1);
            assert.equal(callback, result);
        });

        it('should not extract the callback', function () {
            
            // given
            var method = new Method({});
=======
var Mhpbod = require('../lib/web3_hpb/method');

describe('lib/web3_hpb/method', function () {
    describe('extractCallback', function () {
        it('should extract callback', function () {
            
            // given
            var method = new Mhpbod({});
            var callback = function () { };
            var args = [1, callback]

            // when
            var result = method.extractCallback(args);

            // then
            assert.equal(args.length, 1);
            assert.equal(callback, result);
        });
        
        it('should extract callback created using newFunction', function () {
            
            // given
            var method = new Mhpbod({});
            var callback = new Function ();
            var args = [1, callback]

            // when
            var result = method.extractCallback(args);

            // then
            assert.equal(args.length, 1);
            assert.equal(callback, result);
        });

        it('should not extract the callback', function () {
            
            // given
            var method = new Mhpbod({});
>>>>>>> branch 'master' of https://github.com/wgllele/web3_for_hpb.git
            var args = [1, 2]

            // when
            var result = method.extractCallback(args);

            // then
            assert.equal(args.length, 2);
            assert.equal(result, null);
        });
    });
});

