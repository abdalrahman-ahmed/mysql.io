module.exports = function DELETE(table = String){
    var cmd = [`DELETE FROM ${table}`];

    var EXECUT = () => this.EXECUT(cmd.join(' '));
    
    var AND = (conditions = Object) => this.AND(conditions, cmd, {LIMIT,EXECUT});
    
    var OR = (conditions = Object) => this.OR(conditions, cmd, {LIMIT,EXECUT});
    
    var LIMIT = (limit = Array) => this.LIMIT(limit, cmd, {EXECUT});

    var ASC = () => this.ASC(cmd, {LIMIT,EXECUT});

    var DESC = () => this.DESC(cmd, {LIMIT,EXECUT});

    var ORDER_BY = (column) => this.ORDER_BY(column, cmd, {ASC,DESC,LIMIT,EXECUT});

    var WHERE = (conditions = Object) => this.WHERE(conditions, cmd, {AND,OR,ORDER_BY,LIMIT,EXECUT});

    return {WHERE,ORDER_BY};
};