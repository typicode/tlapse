# tlapse [![Build Status](https://travis-ci.org/typicode/tlapse.svg?branch=master)](https://travis-ci.org/typicode/tlapse) [![npm](https://badge.fury.io/js/tlapse.svg)](https://www.npmjs.com/package/tlapse)

> Create a timelapse of your web development

A tiny utility that mimics the timelapse mode of your camera/smartphone by taking screenshots of your website periodically while you develop.

![screenshot](http://i.imgur.com/QL98ry4.png)

_Uses [pageres-cli](https://github.com/sindresorhus/pageres-cli) for creating screenshots._

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
