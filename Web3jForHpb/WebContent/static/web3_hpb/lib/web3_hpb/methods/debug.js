


"use strict";

<<<<<<< HEAD
var Method = require('../method');

function Debug(web3_hpb) {
    this._requestManager = web3_hpb._requestManager;

    var self = this;

    methods().forEach(function(method) {
        method.attachToObject(self);
        method.setRequestManager(self._requestManager);
    });
}

var methods = function () {

    var accountRangeAt = new Method({
        name: 'accountRangeAt',
        call: 'debug_accountRangeAt',
        params: 4
    });

    var storageRangeAt = new Method({
=======
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
>>>>>>> branch 'master' of https://github.com/wgllele/web3_for_hpb.git
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
