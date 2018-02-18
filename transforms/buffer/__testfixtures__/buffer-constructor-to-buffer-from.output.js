'use strict';

{
    const buf = Buffer.from('abcd');
    console.log(buf);
}

{
    const buf = Buffer.from([1, 2, 3]);
    console.log(buf);
}

{
    const var1 = 'test';
    const buf = Buffer.from(var1, 'utf8');
    console.log(buf);
}

{
    const var1 = 'test';
    const enc = 'utf8';
    const buf = Buffer.from(var1, enc);
    console.log(buf);
}
