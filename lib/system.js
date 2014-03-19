/*!
 * P2 System
 */

/**
 * Module Dependencies
 */

var BigBlock = require('big-block'),
    di = BigBlock.di,
    System,
    P2 = require('./wrapper'),
    Time = require('big-block-time'),
    EntitySystem = BigBlock.EntitySystem,
    RigidBody2D = require('./components').RigidBody2D;

/**
 * P2 System
 *
 * @param {P2} P2
 * @param {TimeSystem} Time
 * @param {EntitySystem} EntitySystem
 * @param {RigidBody2D} RigidBody2D
 * @return {P2System}
 * @api public
 */
System = function (P2, Time, EntitySystem, RigidBody2D) {

  var self = {},
      world,
      family;

  console.log('instantiating P2 System');

  family = EntitySystem.getFamily([RigidBody2D]);

  family.on('added', function (entity) {
    console.log('RigidBody2D added');
    // Add entity to world
  });

  family.on('removed', function (entity) {
    console.log('RigidBody2D removed');
    // Remove entity from world
  });

  Time.on('fixedupdate', update);

  return self;

};

/**
 * Dependency Annotation
 */

di.annotate(System, new di.InjectAnnotation(P2, Time, EntitySystem, RigidBody2D));

/**
 * Module Exports
 */
exports = module.exports = System;