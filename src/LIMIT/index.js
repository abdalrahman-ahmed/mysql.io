module.exports = function LIMIT(limit, cmd, res){
    cmd.push(`LIMIT ${limit}`);
    return res;
};