module.exports = function INSERT(table = String){
    var cmd = [`INSERT INTO ${table}`];
    
    var EXECUT = () => this.EXECUT(cmd.join(' '));
    
    var SET = (columns = Object) => {
        var cols = Object.keys(columns);
        var set = cols.reduce((r,col) => {
            var value = isNaN(columns[col]) ? '\''+columns[col]+'\'' : columns[col];
            var insert = [col,value].join(' = ');
            return [...r, insert];
        },[]).join(',');
        cmd.push(`SET ${set}`);
        return {EXECUT}
    };

    var VALUES = ({columns= Array, rows= Array}) => {
        var values = rows.reduce((r,row) => {
            var value = row.reduce((o,v) => {
                var val = isNaN(v) ? '\''+v+'\'' : v;
                return [...o, val];
            },[]).join(',');
            var insert = `(${value})`;
            return [...r, insert];
        },[]).join(',');
        cmd.push(`(${columns}) VALUES ${values}`);
        return {EXECUT}
    };

    return {SET,VALUES};
};