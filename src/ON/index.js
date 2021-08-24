module.exports = function ON(conditions, cmd, res){
    var cols = Object.keys(conditions);
    var cons = cols.reduce((r,i,x) => {
        var and = x === (cols.length - 1) ? ' ' : 'AND ';
        var val = ( !(conditions[i] instanceof Number) && !/\./.test(conditions[i]) ) ? 
        '\''+conditions[i]+'\''
        :
        (/\//.test(conditions[i]) || /\@/.test(conditions[i])) ? 
            '\''+conditions[i]+'\''
            :
            conditions[i];
        r += [i,'=',val,and].join(' ');
        return r;
    },'');
    cmd.push(`ON (${cons})`);
    return res;
};