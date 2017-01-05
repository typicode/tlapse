# tlapse [![npm](https://img.shields.io/npm/v/tlapse.svg)](https://github.com/typicode/tlapse) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> Create a timelapse of your web development

A tiny utility that mimics the timelapse mode of your camera/smartphone by taking a screenshot of your website periodically while you develop.

To save disk space, consecutive same screenshots are automatically removed. Uses [pageres-cli](https://github.com/sindresorhus/pageres-cli) for creating screenshots.

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

## License

MIT - [Typicode :cactus:](https://github.com/typicode)