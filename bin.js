#!/usr/bin/env node
const tlapse = require('./index')
const defaultOptions = require('./defaults')

const yargs = require('yargs')
  .usage('Usage: $0 [options] -- <pageres-cli-options>')
  .option('every', {
    alias: 'e',
    describe: 'screenshots interval',
    default: defaultOptions.every,
    type: 'string'
  })
  .option('directory', {
    alias: 'd',
    describe: 'screenshots directory',
    default: defaultOptions.directory,
    type: 'string'
  })
  .help()
  .version()

const argv = yargs.argv

if (argv._.length === 0) {
  yargs.showHelp()
  process.exit(1)
}

console.log('Screenshots directory:', argv.directory)
console.log('Interval:', argv.every)

const pageresArgs = argv._.join(' ')
const tlapseOptions = { directory: argv.directory, every: argv.every }

tlapse(pageresArgs, tlapseOptions)
