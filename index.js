/*!
 * P2
 */

/**
 * Module Dependencies
 */

var P2 = {},
    wrapper = require('./lib/wrapper'),
    Components = require('./lib/components'),
    System = require('./lib/system'),
    Time = require('big-block-time');

P2.modules = [wrapper, System, Time];

P2.Components = Components;
P2.System = System;

/**
 * Module Exports
 */
exports = module.exports = P2;