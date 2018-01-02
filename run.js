var dateFormat = require('dateformat')
var fs = require('fs')
var path = require('path')
var mkdirp = require('mkdirp')
var execa = require('execa')
var ms = require('ms')

var pageresPath = '"' + path.join(__dirname, './node_modules/.bin/pageres') + '"'

function runTlapse (pageresOptions, directory, every) {
  if (directory) {
    mkdirp.sync(directory)
    process.chdir(directory)
  }

  const exec = () => takeScreenshot(pageresOptions)

  exec()
  setInterval(() => exec, ms(every))
}

function takeScreenshot (pageresOptions) {
  var cmd = [pageresPath, pageresOptions, '--filename=' + Date.now()].join(' ')

  const result = execa.shellSync(cmd)

  if (result.status !== 0) {
    console.log('Error')
    console.log('stdout:', result.stdout)
    console.log('stderr:', result.stderr)
  } else {
    var recentFiles = fs.readdirSync(process.cwd()).reverse()

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
  }
}

module.exports = { runTlapse: runTlapse, takeScreenshot: takeScreenshot }
