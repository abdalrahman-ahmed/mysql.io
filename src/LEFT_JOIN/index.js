module.exports = function LEFT_JOIN(table, cmd, res){
    cmd.push(`LEFT JOIN ${table}`);
    return res;
};