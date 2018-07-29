#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')
const prependHttp = require('prepend-http')
const ms = require('ms')
const mkdirp = require('mkdirp')
const dateFormat = require('dateformat')

const yargs = require('yargs')
  .usage('Usage: $0 [options] [url]')
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

const argv = yargs.argv

if (argv._.length === 0) {
  yargs.showHelp()
  process.exit(1)
}

if (argv.directory) {
  mkdirp.sync(argv.directory)
  process.chdir(argv.directory)
}

async function capture ({ url, path, viewport }) {
  const vp = {
    width: 1280,
    height: 800,
    deviceScaleFactor: 2,
    ...viewport
  }
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  page.setViewport(vp)
  await page.goto(url, {waitUntil: 'networkidle2'})
  await page.screenshot({ path })
  await browser.close()
}

console.log('Screenshots directory:', argv.directory)
console.log('Interval:', argv.every)

async function run () {
  const url = prependHttp(argv._[0])
  try {
    await capture({
      url,
      path: path.join(__dirname, argv.directory, `${Date.now()}.png`)
    })
  } catch (err) {
    console.log('Error: capture failed', err)
    return
  }

  const recentFiles = fs
    .readdirSync(process.cwd())
    .reverse()

  const latestFile = recentFiles[0]
  const previousFile = recentFiles[1]
  const now = dateFormat(Date.now(), 'hh:MM:ss')

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

  console.log(now, '✔ Screenshot saved')
}

run()
setInterval(run, ms(argv.every))
