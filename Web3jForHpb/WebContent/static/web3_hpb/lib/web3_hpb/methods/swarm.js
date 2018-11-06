


"use strict";

var Mhpbod = require('../method');
var Property = require('../property');

function Swarm(web3_hpb) {
    this._requestManager = web3_hpb._requestManager;

    var self = this;

    methods().forEach(function(method) {
        method.attachToObject(self);
        method.setRequestManager(self._requestManager);
    });

    properties().forEach(function(p) {
        p.attachToObject(self);
        p.setRequestManager(self._requestManager);
    });
}

var methods = function () {
    var blockNetworkRead = new Mhpbod({
        name: 'blockNetworkRead',
        call: 'bzz_blockNetworkRead',
        params: 1,
        inputFormatter: [null]
    });

    var syncEnabled = new Mhpbod({
        name: 'syncEnabled',
        call: 'bzz_syncEnabled',
        params: 1,
        inputFormatter: [null]
    });

    var swapEnabled = new Mhpbod({
        name: 'swapEnabled',
        call: 'bzz_swapEnabled',
        params: 1,
        inputFormatter: [null]
    });

    var download = new Mhpbod({
        name: 'download',
        call: 'bzz_download',
        params: 2,
        inputFormatter: [null, null]
    });

    var upload = new Mhpbod({
        name: 'upload',
        call: 'bzz_upload',
        params: 2,
        inputFormatter: [null, null]
    });

    var retrieve = new Mhpbod({
        name: 'retrieve',
        call: 'bzz_retrieve',
        params: 1,
        inputFormatter: [null]
    });

    var store = new Mhpbod({
        name: 'store',
        call: 'bzz_store',
        params: 2,
        inputFormatter: [null, null]
    });

    var get = new Mhpbod({
        name: 'get',
        call: 'bzz_get',
        params: 1,
        inputFormatter: [null]
    });

    var put = new Mhpbod({
        name: 'put',
        call: 'bzz_put',
        params: 2,
        inputFormatter: [null, null]
    });

    var modify = new Mhpbod({
        name: 'modify',
        call: 'bzz_modify',
        params: 4,
        inputFormatter: [null, null, null, null]
    });

    return [
        blockNetworkRead,
        syncEnabled,
        swapEnabled,
        download,
        upload,
        retrieve,
        store,
        get,
        put,
        modify
    ];
};

var properties = function () {
    return [
        new Property({
            name: 'hive',
            getter: 'bzz_hive'
        }),
        new Property({
            name: 'info',
            getter: 'bzz_info'
        })
    ];
};


module.exports = Swarm;
