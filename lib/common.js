'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Set = undefined;
exports.createTween = createTween;
exports.linearTween = linearTween;

var _Observable = require('rxjs/Observable');

var _common = require('hy-component/src/common');

// # src / common.js
// Copyright (c) 2017 Florian Klampfer <https://qwtel.com/>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
exports.Set = _common.Set;

// Creates an observable that emits samples from an easing function on every animation frame
// for a duration `d` ms.
//
// The first emitted value will be a sample form the easing function at `t = 0`,
// and the last emitted value is guaranteed to be the easing function at `t = d`.
//
// It can be used with any of [Robert Penner's easing functions](http://robertpenner.com/easing/),
// i.e. functions with a signature of `(t, b, c, d, s)`, where
// `t`: current time,
// `b`: beginning value,
// `c`: change in value,
// `d`: total duration,
// `s`: optional.

function createTween(easingFunction, b, c, d, s) {
  return _Observable.Observable.create(function (observer) {
    var startTime = void 0;
    var id = requestAnimationFrame(function sample(time) {
      startTime = startTime || time;
      var t = time - startTime;
      if (t < d) {
        observer.next(easingFunction(t, b, c, d, s));
        id = requestAnimationFrame(sample);
      } else {
        observer.next(easingFunction(d, b, c, d, s));
        id = requestAnimationFrame(function () {
          return observer.complete();
        });
      }
    });
    return function () {
      if (id) {
        cancelAnimationFrame(id);
      }
    };
  });
}

// The linear easing function...
function linearTween(t, b, c, d) {
  return c * t / d + b;
}