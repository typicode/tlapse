# tlapse [![Build Status](https://travis-ci.org/typicode/tlapse.svg?branch=master)](https://travis-ci.org/typicode/tlapse) [![npm](https://badge.fury.io/js/tlapse.svg)](https://www.npmjs.com/package/tlapse)

> Create a timelapse of your web development 📷

A tiny utility that takes periodic screenshots of your site while you develop. Uses [puppeteer](https://github.com/GoogleChrome/puppeteer) for creating beautiful high resolution screenshots 🌸.

## Examples

[__CSS-Tricks - Front-End Tools: My Favorite Finds of 2017__](https://css-tricks.com/front-end-tools-favorite-finds-2017/)

![CSS-Tricks example](https://res.cloudinary.com/css-tricks/image/upload/c_scale,w_600,f_auto,q_auto/v1513201500/tlapse-example_imp0sn.gif)

See also:

* [PentaCode - How to Automatically Take Screenshots Of Your Site With TLapse](http://www.penta-code.com/how-to-automatically-take-screenshots-of-your-site-with-tlapse/) [`gif`](http://i.imgur.com/K6rIumh.gif)
* [Moongift.jp - 指定したURLに定期的にアクセスしてスクリーンショットを保存](http://www.moongift.jp/2017/02/tlapse-%E6%8C%87%E5%AE%9A%E3%81%97%E3%81%9Furl%E3%81%AB%E5%AE%9A%E6%9C%9F%E7%9A%84%E3%81%AB%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%97%E3%81%A6%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3/) [`gif`](http://images.moongift.jp/2017/01/open-source-tlapse.3cebe89d9666812c9ca2af749c7d51df.gif)

_Examples are welcome. Ping me [@typicode](https://twitter.com/typicode) or make a PR if you've created something using tlapse_ 😉

## Usage

### Automatically start tlapse with your server (recommended)

```sh
npm install npm-run-all tlapse --save-dev
```

```json
{
  "scripts": {
    "dev": "run-p server tlapse",
    "server": "node server",
    "tlapse": "tlapse localhost:3000"
  }
}
```

```sh
npm run dev
```

__Note__ [`npm-run-all`](https://github.com/mysticatea/npm-run-all) lets you run scripts in parallel.

### Manual start

You can also install `tlapse` globally and run it manually

```sh
npm install tlapse --global
tlapse localhost:3000
```

Alternatively, you can use `npx`

```sh
npx tlapse localhost:3000
```

## Options

You can set custom interval, directory and resolution using options:

```sh
tlapse --every 5m --directory ./screens --resolution 360x640 localhost:3000
```

__Note__ by default, `tlapse` will use `1366x768` resolution which is the most popular.

## License

MIT - [Typicode :cactus:](https://github.com/typicode) - [Patreon](https://patreon.com/typicode)
