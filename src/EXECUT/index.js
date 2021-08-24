module.exports = function EXECUT(cmd, val){
    var res = {error: null, success: false, data: null};
    try{
        var query = this.format(cmd,val);
        console.log(query);
        res.data = this.connection.query(query);
        res.success = true;
    }catch({message}){
        res.error = message;
    }finally{
        return res
    }
};