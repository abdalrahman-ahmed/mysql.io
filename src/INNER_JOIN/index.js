module.exports = function INNER_JOIN(table = String, cmd, res){
    cmd.push(`INNER JOIN ${table}`);
    return res;
};