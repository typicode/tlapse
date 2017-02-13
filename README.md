# tlapse [![Build Status](https://travis-ci.org/typicode/tlapse.svg?branch=master)](https://travis-ci.org/typicode/tlapse) [![npm](https://badge.fury.io/js/tlapse.svg)](https://www.npmjs.com/package/tlapse)

> Create a timelapse of your web development

A tiny utility that takes periodic screenshots of your site while you develop.

![screenshot](http://i.imgur.com/QL98ry4.png)

_Uses [pageres-cli](https://github.com/sindresorhus/pageres-cli) for creating screenshots._

## Examples

* [`gif`](http://i.imgur.com/K6rIumh.gif) [PentaCode](http://www.penta-code.com/how-to-automatically-take-screenshots-of-your-site-with-tlapse/) 
* [`gif`](http://images.moongift.jp/2017/01/open-source-tlapse.3cebe89d9666812c9ca2af749c7d51df.gif) [moongift.jp](http://www.moongift.jp/2017/02/tlapse-%E6%8C%87%E5%AE%9A%E3%81%97%E3%81%9Furl%E3%81%AB%E5%AE%9A%E6%9C%9F%E7%9A%84%E3%81%AB%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%97%E3%81%A6%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3/)

_Ping me or make a PR if you've created something using tlapse ;)_

## Install

```
npm install -g tlapse
```

## Usage

```sh
tlapse -- localhost:3000
```

## Options

To change interval and directory where screenshots are saved, use the following options

```sh
tlapse --every 5m --directory ./screens -- localhost:3000
```

You can also pass any [pageres-cli](https://github.com/sindresorhus/pageres-cli) options after `--`

```sh
tlapse -- localhost:3000 1366x768 --selector='.page-header'
```

## Tip 

If you want to start your server and `tlapse` at the same time, add `tlapse` to your `package.json` scripts and use [npm-run-all](https://github.com/mysticatea/npm-run-all) to start them in parallel.

```json
{
  "scripts": {
    "start": "run-p server tlapse",
    "server": "node server",
    "tlapse": "tlapse -- localhost:3000"
  }
}
```

## License

MIT - [Typicode :cactus:](https://github.com/typicode)
