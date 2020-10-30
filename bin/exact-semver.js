#!/usr/bin/env node
let fs = require('fs')
let path = require('path')
let makeExact = require('../src/make-exact')

let pkgPath = path.resolve('package.json')
let pkgText = fs.readFileSync(pkgPath, 'utf8')
let pkg = JSON.parse(pkgText)
if (makeExact(pkg)) {
  pkgText = JSON.stringify(pkg, null, 2) + pkgText.match(/\r?\n?$/)[0]
  fs.writeFileSync(pkgPath, pkgText)
}
