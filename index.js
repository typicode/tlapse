var dateFormat = require('dateformat')
var fs = require('fs')
var path = require('path')
var mkdirp = require('mkdirp')
var execa = require('execa')
var ms = require('ms')
const defaultOptions = require('./defaults')

var pageresPath = '"' + path.join(__dirname, './node_modules/.bin/pageres') + '"'

function takeScreenshot (pageresOptions, directory) {
  var cmd = [pageresPath, pageresOptions, '--filename=' + Date.now()].join(' ')
  var directory = directory || process.cwd()

  execa.shell(cmd)
    .then(result => {
      var recentFiles = fs.readdirSync(directory).reverse()

      var latestFile = recentFiles[0]
      var previousFile = recentFiles[1]
      var now = dateFormat(Date.now(), 'hh:MM:ss')

      if (latestFile && latestFile.indexOf('.png.') !== -1) {
        console.log(now, "○ Can't connect, Skipping")
        return fs.unlinkSync(latestFile)
      }

      if (
        latestFile &&
        previousFile &&
        fs.readFileSync(latestFile, 'utf-8') ===
          fs.readFileSync(previousFile, 'utf-8')
      ) {
        console.log(now, '○ Duplicate screenshot, skipping')
        return fs.unlinkSync(latestFile)
      }

      console.log(now, result.stdout.trim())
    })
    .catch(error => {
      console.log(error)
    })
}

function run (pageresArgs, tlapseOptions) {
  tlapseOptions = tlapseOptions || {}

  if (tlapseOptions.directory) {
    mkdirp.sync(tlapseOptions.directory)
  }

  const exec = () => takeScreenshot(pageresArgs, tlapseOptions.directory || defaultOptions.directory)

  exec()
  return setInterval(() => exec, ms(tlapseOptions.every || defaultOptions.every))
}

module.exports = run
