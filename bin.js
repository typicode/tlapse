#!/usr/bin/env node
const path = require('path')
const yargs = require('yargs')
const prependHttp = require('prepend-http')
const index = require('./index')

const { argv } = yargs
  .usage('Usage:\n  $0 <url> [options]')
  .demandCommand(1, 1, 'Please provide a URL')
  .coerce('_', _ => (_.length === 1 ? [prependHttp(_[0])] : _))
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
  .coerce('directory', path.resolve)
  .option('viewport', {
    alias: 'v',
    describe: 'page viewport',
    default: '1366x768',
    type: 'string'
  })
  .coerce('viewport', viewport => {
    const [width, height] = viewport.split('x').map(s => Number(s))
    return { width, height }
  })
  .example(
    '$0 localhost:3000 --every 5m --directory ./screens --viewport 360x640'
  )
  .help()
  .version()

index(argv)
