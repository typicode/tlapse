#!/usr/bin/env node
var run = require('./src/run').run

var yargs = require('yargs')
  .usage('Usage: $0 [options] -- <pageres-cli-options>')
  .option('every', {
    alias: 'e',
    describe: 'screenshots interval',
    default: '1m',
    type: 'string'
  })
  .option('directory', {
    alias: 'd',
    describe: 'screenshots directory',
    default: './tlapse',
    type: 'string'
  })
  .help()
  .version()

var argv = yargs.argv

if (argv._.length === 0) {
  yargs.showHelp()
  process.exit(1)
}

console.log('Screenshots directory:', argv.directory)
console.log('Interval:', argv.every)

var pageresOptions = argv._.join(' ')

run(pageresOptions, argv.directory, argv.every)
