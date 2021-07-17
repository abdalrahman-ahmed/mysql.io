module.exports = function DELETE(table = String){
    var cmd = [`DELETE FROM ${table}`];
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

    return {WHERE,ORDER_BY};
};