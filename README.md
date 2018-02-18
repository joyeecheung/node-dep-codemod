# Codemods for deprecated Node.js APIs

This repository contains a collection of
[JSCodeshift](https://github.com/facebook/jscodeshift)
codemod scripts for migrating code that uses
[deprecated Node.js APIs](https://nodejs.org/api/deprecations.html).

## Setup & Run

```
npm install -g jscodeshift
git clone https://github.com/joyeecheung/node-dep-codemod.git
jscodeshift -t transforms/subsystem/codemod-name path/to/file/or/directory
```

Use the `-d` option for a dry-run, `-p` to print the output for
comparison. For more options run `jscodeshift -h`.

## Transforms

### Buffers

#### [DEP005](https://nodejs.org/api/deprecations.html#deprecations_dep0005_buffer_constructor)

```
jscodeshift -t transforms/buffer/buffer-constructor-to-buffer-alloc.js path/to/file/or/directory
jscodeshift -t transforms/buffer/buffer-constructor-to-buffer-from.js path/to/file/or/directory
```

## TODO

A binary target that runs codemods by subsystems/DEPIDs
