#!/usr/bin/env node
var fs = require('fs')
var path = require('path')
var debug = require('debug')('tlapse')
var mkdirp = require('mkdirp')
var execa = require('execa')
var ms = require('ms')
var dateFormat = require('dateformat')
var pageresPath = path.join(__dirname, './node_modules/.bin/pageres')

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

if (argv.directory) {
  mkdirp.sync(argv.directory)
  process.chdir(argv.directory)
}

console.log('Screenshots directory:', argv.directory)
console.log('Interval:', argv.every)

function run () {
  var pageresOptions = argv._.join(' ')
  var cmd = [
    pageresPath,
    pageresOptions,
    '--filename=' + Date.now()
  ].join(' ')

  debug(cmd)
  const result = execa.shellSync(cmd)

  if (result.status !== 0) {
    console.log('Error')
    console.log('stdout:', result.stdout)
    console.log('stderr:', result.stderr)
  } else {
    var recentFiles = fs
      .readdirSync(process.cwd())
      .reverse()

    var latestFile = recentFiles[0]
    var previousFile = recentFiles[1]
    var now = dateFormat(Date.now(), 'hh:MM:ss')

    if (latestFile && latestFile.indexOf('.png.') !== -1) {
      console.log(now, '○ Can\'t connect, Skipping')
      return fs.unlinkSync(latestFile)
    }

    if (
      latestFile &&
      previousFile &&
      fs.readFileSync(latestFile, 'utf-8') === fs.readFileSync(previousFile, 'utf-8')
    ) {
      console.log(now, '○ Duplicate screenshot, skipping')
      return fs.unlinkSync(latestFile)
    }

    console.log(now, result.stdout.trim())
  }
}

run()
setInterval(run, ms(argv.every))
