# tlapse [![Build Status](https://travis-ci.org/typicode/tlapse.svg?branch=master)](https://travis-ci.org/typicode/tlapse) [![npm](https://badge.fury.io/js/tlapse.svg)](https://www.npmjs.com/package/tlapse) [![Support on Patreon](https://img.shields.io/badge/support-%E2%99%A5-ff69b4.svg)](https://www.patreon.com/typicode)

> Create a timelapse of your web development

A tiny utility that takes periodic screenshots of your site while you develop.

![screenshot](https://cdn.rawgit.com/marionebl/b49b7a884188f5b9f35a0dbc355750c2/raw/669e7c1f95ed8232e4080fbb290d2f9bbd586c83/tlapse.svg)

_Uses [pageres-cli](https://github.com/sindresorhus/pageres-cli) for creating screenshots._

## Examples

From [CSS-Tricks - Front-End Tools: My Favorite Finds of 2017](https://css-tricks.com/front-end-tools-favorite-finds-2017/) [`gif`](https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_600,f_auto,q_auto/v1513201500/tlapse-example_imp0sn.gif)

![CSS-Tricks example](https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_600,f_auto,q_auto/v1513201500/tlapse-example_imp0sn.gif)

See also:

* [PentaCode - How to Automatically Take Screenshots Of Your Site With TLapse](http://www.penta-code.com/how-to-automatically-take-screenshots-of-your-site-with-tlapse/) [`gif`](http://i.imgur.com/K6rIumh.gif)
* [Moongift.jp - 指定したURLに定期的にアクセスしてスクリーンショットを保存](http://www.moongift.jp/2017/02/tlapse-%E6%8C%87%E5%AE%9A%E3%81%97%E3%81%9Furl%E3%81%AB%E5%AE%9A%E6%9C%9F%E7%9A%84%E3%81%AB%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%97%E3%81%A6%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3/) [`gif`](http://images.moongift.jp/2017/01/open-source-tlapse.3cebe89d9666812c9ca2af749c7d51df.gif)

_Examples are welcome. Ping me [@typicode](https://twitter.com/typicode) or make a PR if you've created something using tlapse ;)_

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

If you want to use tlaps in a start script just import `tlapse\run` and use it like this:

```
  import { runTlapse, } from 'tlapse/run'
  // or
  // const runTlapse = require('tlapse/run').runTlapse

  runTlapse('localhost:3000', './screens', '5m')
```

## License

MIT - [Typicode :cactus:](https://github.com/typicode)
