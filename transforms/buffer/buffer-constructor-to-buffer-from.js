'use strict';
/*
 * DEP0005: Buffer() constructor
 * Simple:
 * new Buffer([...]) -> Buffer.from([...])
 * 
 * (TODO) Adventurous:
 * new Buffer(arr) -> Buffer.from(arr)
 * new Buffer(array) -> Buffer.from(array)
 * new Buffer(buf) -> Buffer.from(buf)
 * 
 * Simple:
 * new Buffer('something') -> Buffer.from('something')
 * new Buffer(var1, var2) -> Buffer.from(var1, var2)
 * new Buffer(var1, 'enc') -> Buffer.from(var1, 'enc')
 * 
 * (TODO) Adventurous:
 * new Buffer(str) -> Buffer.from(str)
*/

function hasStrArgs(p) {
    return p.value.arguments.length === 1 &&
         p.value.arguments[0].type === 'Literal' &&
         typeof p.value.arguments[0].value === 'string';
}

function hasArrayArgs(p) {
    return p.value.arguments.length === 1 &&
         p.value.arguments[0].type === 'ArrayExpression';
}

function hasTwoArgs(p) {
    return p.value.arguments.length === 2;
}

module.exports = function(file, api) {
    const j = api.jscodeshift;
    return j(file.source)
        .find(j.NewExpression, {
            callee: {
                name: 'Buffer'
            }
        })
        .filter((p) => {
            return hasStrArgs(p) || hasArrayArgs(p) || hasTwoArgs(p);
        })
        .replaceWith(p => {
            return j.callExpression(
                j.memberExpression(
                    j.identifier('Buffer'),
                    j.identifier('from')
                ),
                p.value.arguments
            );
        }).toSource();
};
