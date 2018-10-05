# tlapse [![Build Status](https://travis-ci.org/typicode/tlapse.svg?branch=master)](https://travis-ci.org/typicode/tlapse) [![npm](https://img.shields.io/npm/v/tlapse.svg)](https://www.npmjs.com/package/tlapse)

> Create a timelapse of your web development 📷

A tiny utility that takes periodic screenshots of your site while you develop. Uses [Puppeteer](https://github.com/GoogleChrome/puppeteer) for creating beautiful high resolution screenshots 🌸.

<a href="https://www.patreon.com/typicode">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## Usage

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

__Note__ [`npm-run-all`](https://github.com/mysticatea/npm-run-all) lets you run scripts in parallel and makes sure that both `tlapse` and `server` are started.

__Options__ `tlapse` can be configured to use different screenshot resolution, interval, etc... to view available options run 

```
tlapse --help
```

## Articles

* [__CSS-Tricks - Front-End Tools: My Favorite Finds of 2017__](https://css-tricks.com/front-end-tools-favorite-finds-2017/)
* [PentaCode - How to Automatically Take Screenshots Of Your Site With TLapse](http://www.penta-code.com/how-to-automatically-take-screenshots-of-your-site-with-tlapse/)
* [Moongift.jp - 指定したURLに定期的にアクセスしてスクリーンショットを保存](http://www.moongift.jp/2017/02/tlapse-%E6%8C%87%E5%AE%9A%E3%81%97%E3%81%9Furl%E3%81%AB%E5%AE%9A%E6%9C%9F%E7%9A%84%E3%81%AB%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%97%E3%81%A6%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3/)

## License

MIT - [Typicode :cactus:](https://github.com/typicode) - [Patreon](https://patreon.com/typicode)
