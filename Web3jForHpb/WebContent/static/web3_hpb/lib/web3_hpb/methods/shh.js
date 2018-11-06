


var Mhpbod = require('../method');
var Filter = require('../filter');
var watches = require('./watches');

var Shh = function (web3_hpb) {
    this._requestManager = web3_hpb._requestManager;

    var self = this;

    methods().forEach(function(method) {
        method.attachToObject(self);
        method.setRequestManager(self._requestManager);
    });
};

Shh.prototype.newMessageFilter = function (options, callback, filterCreationErrorCallback) {
    return new Filter(options, 'shh', this._requestManager, watches.shh(), null, callback, filterCreationErrorCallback);
};

var methods = function () {

    return [
        new Mhpbod({
            name: 'version',
            call: 'shh_version',
            params: 0
        }),
        new Mhpbod({
            name: 'info',
            call: 'shh_info',
            params: 0
        }),
        new Mhpbod({
            name: 'setMaxMessageSize',
            call: 'shh_setMaxMessageSize',
            params: 1
        }),
        new Mhpbod({
            name: 'setMinPoW',
            call: 'shh_setMinPoW',
            params: 1
        }),
        new Mhpbod({
            name: 'markTrustedPeer',
            call: 'shh_markTrustedPeer',
            params: 1
        }),
        new Mhpbod({
            name: 'newKeyPair',
            call: 'shh_newKeyPair',
            params: 0
        }),
        new Mhpbod({
            name: 'addPrivateKey',
            call: 'shh_addPrivateKey',
            params: 1
        }),
        new Mhpbod({
            name: 'deleteKeyPair',
            call: 'shh_deleteKeyPair',
            params: 1
        }),
        new Mhpbod({
            name: 'hasKeyPair',
            call: 'shh_hasKeyPair',
            params: 1
        }),
        new Mhpbod({
            name: 'getPublicKey',
            call: 'shh_getPublicKey',
            params: 1
        }),
        new Mhpbod({
            name: 'getPrivateKey',
            call: 'shh_getPrivateKey',
            params: 1
        }),
        new Mhpbod({
            name: 'newSymKey',
            call: 'shh_newSymKey',
            params: 0
        }),
        new Mhpbod({
            name: 'addSymKey',
            call: 'shh_addSymKey',
            params: 1
        }),
        new Mhpbod({
            name: 'generateSymKeyFromPassword',
            call: 'shh_generateSymKeyFromPassword',
            params: 1
        }),
        new Mhpbod({
            name: 'hasSymKey',
            call: 'shh_hasSymKey',
            params: 1
        }),
        new Mhpbod({
            name: 'getSymKey',
            call: 'shh_getSymKey',
            params: 1
        }),
        new Mhpbod({
            name: 'deleteSymKey',
            call: 'shh_deleteSymKey',
            params: 1
        }),

        // subscribe and unsubscribe missing

        new Mhpbod({
            name: 'post',
            call: 'shh_post',
            params: 1,
            inputFormatter: [null]
        })
    ];
};

module.exports = Shh;

