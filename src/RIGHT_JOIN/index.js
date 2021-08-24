module.exports = function RIGHT_JOIN(table, cmd, res){
    cmd.push(`RIGHT JOIN ${table}`);
    return res;
}