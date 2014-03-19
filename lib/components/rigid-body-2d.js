'use strict';
/*!
 * Rigid Body 2D Component
 */

/**
 * Module Dependencies
 */

var di = require('big-block').di;

/**
 * Rigid Body 2D Component
 *
 * @api public
 */
function RigidBody2D (scope) {

  console.log('instantiating RigidBody2D');

};

function RigidBody2DProvider () {
  console.log('instantiating RigidBody2D Provider');
  return function (scope) {
    return new RigidBody2D(scope);
  };
};

/**
 * Dependency Annotation
 */

di.annotate(RigidBody2DProvider, new di.InjectAnnotation());

/**
 * Module Exports
 */

exports = module.exports = RigidBody2DProvider;