#!/usr/bin/env node
'use strict'

const { main } = require('./src')
const argv = process.argv.slice(2)
const result = main(...argv)
console.log(result)
