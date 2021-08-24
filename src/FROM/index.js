module.exports = function FROM(table, cmd, res){
    cmd.push(`FROM ${table}`);
    return res;
};