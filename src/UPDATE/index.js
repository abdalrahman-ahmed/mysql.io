module.exports = function UPDATE(table = String){
    var cmd = [`UPDATE ${table}`];

    var EXECUT = () => this.EXECUT(cmd.join(' '));
    
    var OR = (conditions = Object) => this.OR(conditions, cmd, {EXECUT});

    var AND = (conditions = Object) => this.AND(conditions, cmd, {OR,EXECUT});
    
    var WHERE = (conditions = Object) => this.WHERE(conditions, cmd, {AND,OR,EXECUT});
    
    var LIMIT = (limit = Array) => this.LIMIT(limit, cmd, {EXECUT});

    var SET = (columns = Object) => {
        var cols = Object.keys(columns);
        var set = cols.reduce((r,col) => {
            var value = ( !(columns[col] instanceof Number) && !/\./.test(columns[col]) ) ? 
            '\''+columns[col]+'\''
            :
            (/\//.test(columns[col]) || /\@/.test(columns[col])) ? 
                '\''+columns[col]+'\''
                :
                columns[col];
            var insert = [col,value].join(' = ');
            return [...r, insert];
        },[]).join(',');
        cmd.push(`SET ${set}`);
        return {WHERE,LIMIT,EXECUT}
    };

    return {SET}
};