module.exports = function SET(variables = Object){
    var cmd = ['SET'];

    var NEXT = {
        EXECUT: () => this.EXECUT(cmd.join(' '))
    };

    if(!!variables && variables instanceof Object){
        var key = Object.keys(variables)[0];
        var value = variables[key];
        cmd.push([ key, '=', value ].join(' '));
    }else{
        NEXT.GLOBAL = (globals = Object) => {
            var globalKey = Object.keys(globals)[0];
            var globalValue = globals[globalKey];
            cmd.push([ globalKey , '=' , globalValue ].join(' '));

            return NEXT;
        }
    }

    return NEXT;
};