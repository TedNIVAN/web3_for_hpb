


var Mhpbod = require('../method');

var DB = function (web3_hpb) {
    this._requestManager = web3_hpb._requestManager;

    var self = this;
    
    methods().forEach(function(method) { 
        method.attachToObject(self);
        method.setRequestManager(web3_hpb._requestManager);
    });
};

var methods = function () {
    var putString = new Mhpbod({
        name: 'putString',
        call: 'db_putString',
        params: 3
    });

    var getString = new Mhpbod({
        name: 'getString',
        call: 'db_getString',
        params: 2
    });

    var putHex = new Mhpbod({
        name: 'putHex',
        call: 'db_putHex',
        params: 3
    });

    var getHex = new Mhpbod({
        name: 'getHex',
        call: 'db_getHex',
        params: 2
    });

    return [
        putString, getString, putHex, getHex
    ];
};

module.exports = DB;
