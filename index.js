var syncMysql = require('sync-mysql');
var { format, raw } = require('sqlstring');

var {
    SET,
    INSERT,
    SELECT,
    UPDATE,
    DELETE,
    EXECUT
} = require('./src');

class Database {
    constructor(config){
        this.connection = new syncMysql(config);
        
        this.format = format;
        this.raw    = raw;
        this.SET    = SET.bind(this);
        this.EXECUT = EXECUT.bind(this);
        this.SELECT = SELECT.bind(this);
        this.INSERT = INSERT.bind(this);
        this.UPDATE = UPDATE.bind(this);
        this.DELETE = DELETE.bind(this);

        this.SET().GLOBAL({group_concat_max_len:99999}).EXECUT();
    }
}

module.exports = Database;