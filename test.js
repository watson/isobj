'use strict';

var test = require('tape');
var isObj = require('./');

var objects = [
  new Object(),
  {}
];

var nonObjects = [
  new Array(),
  [],
  new Boolean(),
  true,
  new Date(),
  new Error(),
  new Function(),
  function () {},
  Math,
  new Number(),
  1,
  new RegExp(),
  /(?:)/,
  new String(),
  'test'
];

test('should return true for objects', function (t) {
  objects.forEach(function (obj) {
    t.equals(isObj(obj), true);
  });
  t.end();
});

test('should return false for non-objects', function (t) {
  nonObjects.forEach(function (obj) {
    t.equals(isObj(obj), false);
  });
  t.end();
});
