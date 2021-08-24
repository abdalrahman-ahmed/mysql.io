var syncMysql = require('sync-mysql');
var sqlstring = require('sqlstring');
var src       = require('./src');

var funcs = {...src, ...sqlstring};

class Database {
    constructor(config){
        this.connection = new syncMysql(config);

        Object.keys(funcs).forEach(func => {
            this[func] = funcs[func].bind(this);
        });

        this.SET().GLOBAL({group_concat_max_len:99999}).EXECUT();
    }
}

module.exports = Database;