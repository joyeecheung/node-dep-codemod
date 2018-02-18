'use strict';
/*
 * DEP0005: Buffer() constructor
 * 
 * Simple:
 * new Buffer(123) -> Buffer.alloc(123)
 * 
 * (TODO) Adventurous:
 * new Buffer(size) -> Buffer.alloc(size)
 * new Buffer(length) -> Buffer.alloc(length)
 * new Buffer(len) -> Buffer.alloc(len)
 * new Buffer(something.length) -> Buffer.alloc(something.length)
*/

module.exports = function(file, api) {
    const j = api.jscodeshift;
    return j(file.source)
        .find(j.NewExpression, {
            callee: {
                name: 'Buffer'
            }
        })
        .filter((p) => {
            return p.value.arguments.length === 1 &&
             p.value.arguments[0].type === 'Literal' &&
             typeof p.value.arguments[0].value === 'number';
        })
        .replaceWith(p => {
            return j.callExpression(
                j.memberExpression(
                    j.identifier('Buffer'),
                    j.identifier('alloc')
                ),
                p.value.arguments
            );
        }).toSource();
};
