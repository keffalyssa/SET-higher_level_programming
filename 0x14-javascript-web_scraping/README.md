# 0x14. JavaScript - Web scraping

## About this project

This project is my introduction to web scraping with JavaScript. I'm learning how to read files and, later, how to fetch web pages using Node.js and the `request` module. Everything here runs on Node 14 and follows the `semistandard` style.

## Requirements

- Ubuntu 20.04 LTS
- Node 14.x
- Editors: `vi`, `vim`, or `emacs`
- Code must pass `semistandard`
- No `var`, I use `const` and `let`
- Every file is executable, starts with `#!/usr/bin/node`, and ends with a new line

## Setup

Install Node 14:

    curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    sudo apt-get install -y nodejs

Install semistandard:

    sudo npm install semistandard --global

Install the `request` module:

    sudo npm install request --global
    export NODE_PATH=/usr/lib/node_modules

## Tasks

### 0. Readme

**File:** `0-readme.js`

Reads a file in `utf-8` and prints its content. The first argument is the file path. If something goes wrong while reading, it prints the error object.

    $ cat cisfun
    C is super fun!
    $ ./0-readme.js cisfun
    C is super fun!

    $ ./0-readme.js doesntexist
    [Error: ENOENT: no such file or directory, open 'doesntexist'] {
      errno: -2,
      code: 'ENOENT',
      syscall: 'open',
      path: 'doesntexist'
    }

## Author

Keffalyssa Kezatet - [@keffalyssa](https://github.com/keffalyssa)
