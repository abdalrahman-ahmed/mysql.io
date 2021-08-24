module.exports = function SELECT(columns = Array){
    var cmd = ['SELECT', columns.join(',')];
    
    var EXECUT = () => this.EXECUT(cmd.join(' '));

    var AND = (conditions = Object) => this.AND(conditions, cmd, {LIMIT,EXECUT});
    
    var OR = (conditions = Object) => this.OR(conditions, cmd, {LIMIT,EXECUT});
    
    var LIMIT = (limit = Array) => this.LIMIT(limit, cmd, {EXECUT});

    var ASC = () => this.ASC(cmd, {LIMIT,EXECUT});

    var DESC = () => this.DESC(cmd, {LIMIT,EXECUT});

    var ORDER_BY = (column) => this.ORDER_BY(column, cmd, {ASC,DESC,LIMIT,EXECUT});

    var WHERE = (conditions = Object) => this.WHERE(conditions, cmd, {AND,OR,ORDER_BY,LIMIT,EXECUT});

    var ON = (conditions = Object) => this.ON(conditions, cmd, {ORDER_BY,WHERE,LIMIT,EXECUT});

    var INNER_JOIN = (table = String) => this.INNER_JOIN(table, cmd, {ON,ORDER_BY,WHERE,LIMIT,EXECUT});
    
    var LEFT_JOIN = (table = String) => this.LEFT_JOIN(table, cmd, {ON,ORDER_BY,WHERE,LIMIT,EXECUT});

    var RIGHT_JOIN = (table = String) => this.RIGHT_JOIN(table, cmd, {ON,ORDER_BY,WHERE,LIMIT,EXECUT});

    var FROM = (INTO) => this.FROM(INTO, cmd, {INNER_JOIN,LEFT_JOIN,RIGHT_JOIN,ORDER_BY,WHERE,LIMIT,EXECUT});

    return {FROM};
};