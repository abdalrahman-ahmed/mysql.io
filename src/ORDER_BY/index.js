module.exports = function ORDER_BY(column, cmd, res){
    cmd.push(`ORDER BY ${column}`);
    return res;
};