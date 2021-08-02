module.exports = function SELECT(columns = Array){
    var cmd = [`SELECT ${columns}`];
    
    var EXECUT = () => this.EXECUT(cmd.join(' '));
    
    var AND = (conditions = Object) => {
        var cols = Object.keys(conditions);
        var cons = cols.reduce((r,i) => {
            var and = i === (cols.length - 1) ? '' : 'AND';
            r += [i,'=',conditions[i],and].join(' ');
            return r;
        },'');
        cmd.push(`AND ${cons}`);
        return {LIMIT,EXECUT}
    };
    
    var OR = (conditions = Object) => {
        var cols = Object.keys(conditions);
        var cons = cols.reduce((r,i) => {
            var or = i === (cols.length - 1) ? '' : 'OR';
            r += [i,'=',conditions[i],or].join(' ');
            return r;
        },'');
        cmd.push(`OR ${cons}`);
        return {LIMIT,EXECUT}
    };
    
    var LIMIT = (limit = Array) => {
        cmd.push(`LIMIT ${limit}`);
        return {EXECUT}
    };
    

    var ASC = () => {
        cmd.push(`ASC`);
        return {LIMIT,EXECUT};
    };

    var DESC = () => {
        cmd.push(`DESC`);
        return {LIMIT,EXECUT};
    };

    var ORDER_BY = (column) => {
        cmd.push(`ORDER BY ${column}`);
        return {ASC,DESC,LIMIT,EXECUT};
    };

    var WHERE = (conditions = Object) => {
        var cols = Object.keys(conditions);
        var cons = cols.reduce((r,i,x) => {
            var and = x === (cols.length - 1) ? '' : 'AND ';
            var val = isNaN(conditions[i]) ? '\''+conditions[i]+'\'' : conditions[i];
            r += [i,'=',val,and].join(' ');
            return r;
        },'');
        cmd.push(`WHERE ${cons}`);
        return {AND,OR,ORDER_BY,LIMIT,EXECUT}
    };

    var ON = (conditions = Object) => {
        var cols = Object.keys(conditions);
        var cons = cols.reduce((r,i,x) => {
            var and = x === (cols.length - 1) ? '' : 'AND ';
            var val = isNaN(conditions[i]) && !/\./.test(conditions[i]) ? '\''+conditions[i]+'\'' : conditions[i];
            r += [i,'=',val,and].join(' ');
            return r;
        },'');
        cmd.push(`ON (${cons})`);
        return {ORDER_BY,WHERE,LIMIT,EXECUT};
    };

    var INNER_JOIN = (table = String) => {
        cmd.push(`INNER JOIN ${table}`);
        return {ON,ORDER_BY,WHERE,LIMIT,EXECUT};
    };
    
    var LEFT_JOIN = (table = String) => {
        cmd.push(`LEFT JOIN ${table}`);
        return {ON,ORDER_BY,WHERE,LIMIT,EXECUT};
    };

    var RIGHT_JOIN = (table = String) => {
        cmd.push(`RIGHT JOIN ${table}`);
        return {ON,ORDER_BY,WHERE,LIMIT,EXECUT};
    };

    var FROM = (table = String) => {
        cmd.push(`FROM ${table}`);
        return {INNER_JOIN,LEFT_JOIN,RIGHT_JOIN,ORDER_BY,WHERE,LIMIT,EXECUT};
    };

    return {FROM};
};