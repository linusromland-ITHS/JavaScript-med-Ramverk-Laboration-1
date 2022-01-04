const argv = require('minimist')(process.argv.slice(2));
if (argv.name && argv.c) console.log(`Player: ${argv.name}; Credits: ${argv.c}`);
