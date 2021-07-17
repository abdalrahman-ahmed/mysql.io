module.exports = function UPDATE(table = String){
    var cmd = [`UPDATE ${table}`];

    var EXECUT = () => this.EXECUT(cmd.join(' '));
    
    var OR = (conditions = Object) => {
        var cols = Object.keys(conditions);
        var cons = cols.reduce((r,i) => {
            var or = i === (cols.length - 1) ? '' : 'OR';
            r += [i,'=',conditions[i],or].join(' ');
            return r;
        },'');
        cmd.push(`OR ${cons}`);
        return {EXECUT}
    };

    var AND = (conditions = Object) => {
        var cols = Object.keys(conditions);
        var cons = cols.reduce((r,i) => {
            var and = i === (cols.length - 1) ? '' : 'AND';
            r += [i,'=',conditions[i],and].join(' ');
            return r;
        },'');
        cmd.push(`AND ${cons}`);
        return {OR,EXECUT}
    };
    
    var WHERE = (conditions = Object) => {
        var cols = Object.keys(conditions);
        var cons = cols.reduce((r,i,x) => {
            var and = x === (cols.length - 1) ? '' : 'AND';
            r += [i,'=',conditions[i],and].join(' ');
            return r;
        },'');
        cmd.push(`WHERE ${cons}`);
        return {AND,OR,EXECUT}
    };
    
    var LIMIT = (limit = Array) => {
        cmd.push(`LIMIT ${limit}`);
        return {EXECUT}
    };

    var SET = (columns = Object) => {
        var cols = Object.keys(columns);
        var set = cols.reduce((r,col) => {
            var value = isNaN(columns[col]) ? '\''+columns[col]+'\'' : columns[col];
            var insert = [col,value].join(' = ');
            return [...r, insert];
        },[]).join(',');
        cmd.push(`SET ${set}`);
        return {WHERE,LIMIT,EXECUT}
    };

    return {SET}
};