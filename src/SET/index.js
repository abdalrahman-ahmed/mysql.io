module.exports = function SET(variables = Object){
    var cmd = ['SET'];

    var EXECUT = () => this.EXECUT(cmd.join(' '));

    var GLOBAL = (globals = Object) => {
        var globalKey = Object.keys(globals)[0];
        var globalValue = globals[globalKey];
        cmd.push([ globalKey , globalValue ].join(' = '));

        return {EXECUT};
    };

    if(!!variables && variables instanceof Object && Object.keys(variables).length){
        var key = Object.keys(variables)[0];
        var value = variables[key];
        cmd.push([ key, '=', value ].join(' '));
    }

    return {GLOBAL,EXECUT};
};