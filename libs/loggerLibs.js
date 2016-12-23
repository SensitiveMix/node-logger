
const config = require('../config/constant')
const winston = require('winston')
const moment = require('moment')

winston.remove(winston.transports.Console)
winston.add(winston.transports.Console, {
  'timestamp': () => {
    return moment().format('LLL')
  },
  'colorize': true
})
winston.add(winston.transports.File, {
  filename: './logger.log',
  'timestamp': () => {
    return moment().format('LLL')
  },
  'colorize': true
})

if (config.logLevel && config.logLevel === 'debug') {
  winston.level = 'debug'
}

exports.error = msg => {
  winston.error(msg)
}

exports.info = msg => {
  winston.info(msg)
}

exports.debug = msg => {
  winston.debug(msg)
}
