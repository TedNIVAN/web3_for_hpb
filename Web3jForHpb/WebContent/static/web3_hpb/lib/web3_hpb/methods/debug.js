


"use strict";

var Mhpbod = require('../method');

function Debug(web3_hpb) {
    this._requestManager = web3_hpb._requestManager;

    var self = this;

    methods().forEach(function(method) {
        method.attachToObject(self);
        method.setRequestManager(self._requestManager);
    });
}

var methods = function () {

    var accountRangeAt = new Mhpbod({
        name: 'accountRangeAt',
        call: 'debug_accountRangeAt',
        params: 4
    });

    var storageRangeAt = new Mhpbod({
        name: 'storageRangeAt',
        call: 'debug_storageRangeAt',
        params: 5
    });

    return [
        accountRangeAt,
        storageRangeAt
    ];
};

module.exports = Debug;
