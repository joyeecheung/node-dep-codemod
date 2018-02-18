'use strict';

{
    const buf = new Buffer('abcd');
    console.log(buf);
}

{
    const buf = new Buffer([1, 2, 3]);
    console.log(buf);
}

{
    const var1 = 'test';
    const buf = new Buffer(var1, 'utf8');
    console.log(buf);
}

{
    const var1 = 'test';
    const enc = 'utf8';
    const buf = new Buffer(var1, enc);
    console.log(buf);
}
