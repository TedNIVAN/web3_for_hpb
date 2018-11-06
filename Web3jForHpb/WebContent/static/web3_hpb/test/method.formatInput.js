var chai = require('chai');
var assert = chai.assert;
var Mhpbod = require('../lib/web3_hpb/method');

describe('lib/web3_hpb/method', function () {
    describe('formatInput', function () {
        it('should format plain input', function () {
            
            // given
            var star = function (arg) {
                return arg + '*';
            };
            
            var method = new Mhpbod({
                inputFormatter: [star, star, star]
            });
            var args = ['1','2','3'];
            var expectedArgs = ['1*', '2*', '3*'];

            // when
            var result = method.formatInput(args);

            // then
            assert.deepEqual(result, expectedArgs);
        });

        it('should do nothing if there is no formatter', function () {

            // given
            var method = new Mhpbod({});
            var args = [1,2,3];

            // when
            var result = method.formatInput(args);
            
            // then
            assert.deepEqual(result, args);
        });
    });
});

