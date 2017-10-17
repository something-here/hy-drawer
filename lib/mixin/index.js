'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sSetupDOM = exports.sSetup = exports.MIXIN_FEATURE_TESTS = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.drawerMixin = drawerMixin;

require('core-js/fn/array/from');

require('core-js/fn/function/bind');

require('core-js/fn/object/assign');

var _component = require('hy-component/src/component');

var _symbols = require('hy-component/src/symbols');

var _types = require('hy-component/src/types');

var _Observable = require('rxjs/Observable');

var _Subject = require('rxjs/Subject');

var _combineLatest = require('rxjs/observable/combineLatest');

var _defer = require('rxjs/observable/defer');

var _fromEvent = require('rxjs/observable/fromEvent');

var _merge = require('rxjs/observable/merge');

var _never = require('rxjs/observable/never');

var _do = require('rxjs/operator/do');

var _filter = require('rxjs/operator/filter');

var _map = require('rxjs/operator/map');

var _mapTo = require('rxjs/operator/mapTo');

var _pairwise = require('rxjs/operator/pairwise');

var _repeatWhen = require('rxjs/operator/repeatWhen');

var _sample = require('rxjs/operator/sample');

var _share = require('rxjs/operator/share');

var _skipWhile = require('rxjs/operator/skipWhile');

var _startWith = require('rxjs/operator/startWith');

var _switchMap = require('rxjs/operator/switchMap');

var _take = require('rxjs/operator/take');

var _takeUntil = require('rxjs/operator/takeUntil');

var _timestamp = require('rxjs/operator/timestamp');

var _withLatestFrom = require('rxjs/operator/withLatestFrom');

var _common = require('../common');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // # src / mixin / index.js
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

// ## Overview
// This component is written in [RxJS] and reading its code requires some basic understanding
// of how RxJS works. It may also serve as an example of how to use RxJS (or how not to use it...).
//
// Other than RxJS, you should be familiar with the (non-standard) function-bind syntax `::`,
// which is extremely helpful with using RxJS operators *as if* they were class methods,
// as well as writing private functions for our mixin.
//
// Finally, the export is a [ES6 Mixin][esmixins],
// which is a clever way of using the ES6 class syntax to achieve inheritance-based mixins.
//
// ## Table of Contents
// {:.no_toc}
// * Table of Contents
// {:toc}

// ## Imports
// ES6+ functions that we use.


// Importing the hy-compontent base libary,
// which helps with making multiple versions of the component (Vanilla JS, WebComponent, etc...).


// As mentioned before, we only import the RxJS function that we need.


// Some helper functions to create observable tweens. See [src / common.js](../common.md).


// ## Constants
// A set of [Modernizr] tests that are required for this component to work.
var MIXIN_FEATURE_TESTS = exports.MIXIN_FEATURE_TESTS = new _common.Set([].concat(_toConsumableArray(_component.COMPONENT_FEATURE_TESTS), ['eventlistener', 'queryselector', 'requestanimationframe', 'classlist', 'opacity', 'csstransforms', 'csspointerevents']));

// We export the setup symbols,
// so that mixin users don't have to import them from hy-compnent separately.
exports.sSetup = _symbols.sSetup;
exports.sSetupDOM = _symbols.sSetupDOM;

// The duration (in ms) of the animation when releasing the drawer.

var TRANSITION_DURATION = 200;

// Minimum velocity of the drawer (in px/ms) when releasing to make it fling to opened/closed state.
var VELOCITY_THRESHOLD = 0.15;

// If `Symbol` isn't supported, just use underscore naming convention for private properties.
var _Symbol = global.Symbol || function (x) {
  return '_' + x;
};

// We use `Symbol`s for all internal variables, to avoid naming conflicts when using the mixin.
// Instead of using UPPERCASE names for symbols, which makes the code too verbose,
// we prefix every symbol with the letter 's'.
var sOpened$ = _Symbol('openedObservable');
var sAlign$ = _Symbol('alignObservable');
var sPersitent$ = _Symbol('persistentObservable');
var sPreventDefault$ = _Symbol('preventDefaultObservable');
var sMouseEvents$ = _Symbol('mouseEventsObservable');
var sBackButton$ = _Symbol('backButtonObservable');
var sAnimateTo$ = _Symbol('animateToObservable');
var sDrawerWidth = _Symbol('drawerWidth');
var sScrimEl = _Symbol('scrimElement');
var sContentEl = _Symbol('contentElement');
var sScrollEl = _Symbol('scrollElement');

// Using shorthands for common functions
var assign = Object.assign.bind(Object);
var abs = Math.abs.bind(Math);
var min = Math.min.bind(Math);
var max = Math.max.bind(Math);

// ## Fuctions
// ### Observable extensions
// #### Filter when
// This operator is like `filter`, but it takes an observable of booleans as input,
// instead of a predicate function.
function filterWhen(p$) {
  for (var _len = arguments.length, others = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    others[_key - 1] = arguments[_key];
  }

  if (process.env.DEBUG && !p$) throw Error();else if (others.length === 0) {
    var _context;

    return (_context = (_context =

    // Finally, we take the start position of the finger, the start position of the drawer,
    // and the current position of the finger to calculate the next `translateX` value.

    // By using `switchMap` we ensure that subsequent events that trigger an animation
    // don't cause more than one animation to be played at a time.
    _withLatestFrom.withLatestFrom.call(this, p$),
    // Since we are at the mercy of the browser firing move events,
    // we make sure that some time has passed since the last move event.
    _filter.filter).call(_context, function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          p = _ref2[1];

      return p;
    }),
    /* TODO: drawerWdith could be outdated */

    // Now we are save to calculate the current velocity without divide by zero errors.
    _map.map).call(_context, function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 1),
          x = _ref4[0];

      return x;
    });

    // When providing more than one observable, the result observable will only emit values
    // when `every` input observable has emitted a truthy value.
  } else {
    var _context2;

    return (_context2 = (_context2 = _withLatestFrom.withLatestFrom.call.apply(_withLatestFrom.withLatestFrom, [this, p$].concat(others)), _filter.filter).call(_context2, function (_ref5) {
      var _ref6 = _toArray(_ref5),
          ps = _ref6.slice(1);

      return ps.every(function (p) {
        return p;
      });
    }), _map.map).call(_context2, function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 1),
          x = _ref8[0];

      return x;
    });
  }
}

// #### Subscribe when
// This operator is like `filterWhen`, but it will unsubscribe from the source observable
// when the input observable emits `false`, and re-subscribe when it emits `true`.
function subscribeWhen(p$) {
  var _this = this;

  if (process.env.DEBUG && !p$) throw Error();
  return _switchMap.switchMap.call(p$, function (p) {
    return p ? _this : _never.never.call(_Observable.Observable);
  });
}

// ### Private Methods
// The functions are used as "private" methods on the mixin, using the `::` syntax.

// #### Is in range?
// Given a x-coordinate, `isInRange` will  determine whether it is within range from where
// to pull the drawer. The x-coordinate *must* be larger than the lower bound,
// but when the drawer is opened it may be anywhere on the screen.
// Otherwise it must be below the upper bound.
function isInRange(clientX, opened) {
  switch (this.align) {
    case 'left':
      return clientX > this.range[0] && (opened || clientX < this.range[1]);
    case 'right':
      return clientX < window.innerWidth - this.range[0] && (opened || clientX > window.innerWidth - this.range[1]);
    default:
      throw Error();
  }
}

// #### Calculate 'Will open?'
// Based on current velocity and position of the drawer,
// should the drawer slide open, or snap back?
// TODO: could incorporate the current open state of the drawer.
function calcWillOpen(velocity, translateX) {
  switch (this.align) {
    case 'left':
      {
        if (velocity > VELOCITY_THRESHOLD) return true;else if (velocity < -VELOCITY_THRESHOLD) return false;else if (translateX >= this[sDrawerWidth] / 2) return true;else return false;
      }
    case 'right':
      {
        if (-velocity > VELOCITY_THRESHOLD) return true;else if (-velocity < -VELOCITY_THRESHOLD) return false;else if (translateX <= -this[sDrawerWidth] / 2) return true;else return false;
      }
    default:
      throw Error();
  }
}

// #### Calculate translate X
// Calcuate the current position of the drawer,
// by taking the difference between the current and starting postion of the finger,
// then adding that difference to the starting position of the drawer.
// This way, we avoid the drawer jumping to the finger, when "catching" it during an animation.
// The function will also clip the position at 0 and the width of the drawer.
function calcTranslateX(clientX, startX, startTranslateX) {
  switch (this.align) {
    case 'left':
      {
        var deltaX = clientX - startX;
        var translateX = startTranslateX + deltaX;
        return max(0, min(this[sDrawerWidth], translateX));
      }
    case 'right':
      {
        var _deltaX = clientX - startX;
        var _translateX = startTranslateX + _deltaX;
        return min(0, max(-this[sDrawerWidth], _translateX));
      }
    default:
      throw Error();
  }
}

// #### Get movable drawer width
// One feature of hy-drawer is to allow the drawer to "peek" over the edge.
// This effect is achieved by setting a smaller negative `left` (`right`) CSS property,
// than is the width of the drawer,
// The 'moveable' part of the drawer, then, is equal to that the inverse of that property.
// See [Styling](../../styling.md) for more.
function getMovableDrawerWidth() {
  return -parseFloat(getComputedStyle(this[sContentEl])[this.align]);
}

// #### Prepare and cleanup interaction
// `prepareInteraction` causes various side effects before sliding the drawer.
//
// Note that the drawer receives the `hy-drawer-opened` CSS class when it is opened.
// This class makes the drawer appear open by setting the CSS `left` (`right`) property, instead
// of an absoulte `transform` value.
// This way, the drawer's width can change while it is open without having to
// recalculate `translateX` on every `resize`.
// However, it has to be removed before we move the drawer via `translateX` again.
function prepareInteraction() {
  this[sContentEl].style.willChange = 'transform';
  this[sScrimEl].style.willChange = 'opacity';
  this[sContentEl].classList.remove('hy-drawer-opened');
  this[sDrawerWidth] = getMovableDrawerWidth.call(this);
}

function histId() {
  return this.el.id || this.constructor.componentName;
}

// Cleanup code after a completed interaction.
// Will add/remove the beforementioned `hy-drawer-opened` class.
function cleanupInteraction(opened) {
  this[sScrimEl].style.willChange = '';
  this[sContentEl].style.willChange = '';

  if (opened) {
    this[sScrimEl].style.pointerEvents = 'all';
    this[sContentEl].classList.add('hy-drawer-opened');
  } else {
    this[sScrimEl].style.pointerEvents = '';
    this[sContentEl].classList.remove('hy-drawer-opened');
  }

  // If the experimental back button feature is enabled we hack the history API,
  // so that it matches the state of the drawer...
  if (this._backButton) {
    var id = histId.call(this);
    var hash = '#' + id + '--opened';

    if (opened && window.location.hash !== hash) {
      window.history.pushState(_defineProperty({}, id, true), document.title, hash);
    }

    if (!opened && window.history.state && window.history.state[histId.call(this)] && window.location.hash !== '') {
      window.history.back();
    }
  }

  // Once we're finished cleaning up, we fire the `transitioned` event.
  this[_symbols.sFire]('transitioned', { detail: opened });
}

// #### Update DOM
// In the end, we only modify two properties: The x-coordinate of the drawer,
// and the opacity of the scrim, which is handled by `updateDOM`.
function updateDOM(translateX) {
  var inv = this.align === 'left' ? 1 : -1;
  this[sContentEl].style.transform = 'translateX(' + translateX + 'px)';
  this[sScrimEl].style.opacity = translateX / this[sDrawerWidth] * inv;
}

// #### Get start observable
// The following function returns an observable of all "start" events.
// Usually, that's just `touchstart` event of the first finger touching the screen,
// however since the compontent also supports mouse events,
// we may listen for `mousedown` events.
function getStartObservable() {
  var _context3;

  // Since the `mouseEvents` option may change at any point, we `switchMap` to reflect the changes.
  return (_context3 = this[sMouseEvents$], _switchMap.switchMap).call(_context3, function (mouseEvents) {
    var _context4;

    // The touchstart observable is passive since we won't be calling `preventDefault`.
    // Also, we're only interested in the first `touchstart`.
    var touchstart$ = (_context4 = (_context4 = _fromEvent.fromEvent.call(_Observable.Observable, document, 'touchstart', { passive: true }), _filter.filter).call(_context4, function (_ref9) {
      var touches = _ref9.touches;
      return touches.length === 1;
    }), _map.map).call(_context4, function (_ref10) {
      var touches = _ref10.touches;
      return touches[0];
    });

    // If mouse events aren't enabled, we're done here.
    if (!mouseEvents) return touchstart$;

    // Otherwise we also include `mousedown` events in the output.
    var mousedown$ = _fromEvent.fromEvent.call(_Observable.Observable, document, 'mousedown', { passive: true });
    return _merge.merge.call(_Observable.Observable, touchstart$, mousedown$);
  });
}

// #### Get move observable
// This function returns an observable of all move events. Usually that's just `touchmove`,
// but may also include `mousemove` events while the mouse button is down.
function getMoveObservable(start$, end$) {
  var _context5;

  // Since the `mouseEvents` or `preventDefault` option may change at any point,
  // we `switchMap` to reflect the changes.
  // Nice: `combineLatest` provides us with the functionality of emitting
  // when either of the inputs change, but not before all inputs have their first value set.
  return (_context5 = _combineLatest.combineLatest.call(_Observable.Observable, this[sMouseEvents$], this[sPreventDefault$]), _switchMap.switchMap).call(_context5, function (_ref11) {
    var _context6;

    var _ref12 = _slicedToArray(_ref11, 2),
        mouseEvents = _ref12[0],
        preventDefault = _ref12[1];

    // We're only keeping track of the first finger.
    // Should the user remove the finger that started the interaction, we use the next instead.
    // Note that this doesn't occur under normal circumstances,
    // and exists primarliy to ensure that the interaction continues without hiccups.
    // Note that the event listener is only passive when the `preventDefault` option is falsy.
    var touchmove$ = (_context6 = _fromEvent.fromEvent.call(_Observable.Observable, document, 'touchmove', {
      passive: !preventDefault
    }), _map.map).call(_context6, function (event) {
      return assign(event.touches[0], { event: event });
    });

    // If mouse events aren't enabled, we're done here.
    if (!mouseEvents) return touchmove$;

    // Otherwise we listen for `mousemove` events,
    // but only those between a `start` and `end` event, i.e. while the user is sliding.
    // We unsubscribe form the source observable outside of those contraints.
    // Again, the listener is only marked as passive when the `preventDefault` option is falsy.
    var mousemove$ = (_context6 = (_context6 = _fromEvent.fromEvent.call(_Observable.Observable, document, 'mousemove', {
      passive: !preventDefault
    }), subscribeWhen).call(_context6, _merge.merge.call(_Observable.Observable, _mapTo.mapTo.call(start$, true), _mapTo.mapTo.call(end$, false))), _map.map).call(_context6, function (event) {
      return assign(event, { event: event });
    });

    return _merge.merge.call(_Observable.Observable, touchmove$, mousemove$);
  });
}

// #### Get end observable
// This function returns an observable of end events.
// Usually, this is the `touchend` event of the last finger, but may also include `mouseup` events,
// when the `mouseEvents` option is enabled.
function getEndObservable() {
  var _context7;

  // Since the `mouseEvents` option may change at any point, we `switchMap` to reflect the changes.
  return (_context7 = this[sMouseEvents$], _switchMap.switchMap).call(_context7, function (mouseEvents) {
    var _context8;

    // We're only interested in the last `touchend`.
    // Otherwise there's at least one finger left on the screen,
    // that can be used to slide the drawer.
    var touchend$ = (_context8 = _fromEvent.fromEvent.call(_Observable.Observable, document, 'touchend', { passive: true }), _filter.filter).call(_context8, function (_ref13) {
      var touches = _ref13.touches;
      return touches.length === 0;
    });

    // If mouse events aren't enabled, we're done here.
    if (!mouseEvents) return touchend$;

    // Otherwise we include `mouseup` events.
    var mouseup$ = _fromEvent.fromEvent.call(_Observable.Observable, document, 'mouseup', { passive: true });
    return _merge.merge.call(_Observable.Observable, touchend$, mouseup$);
  });
}

// #### Get "Is sliding?" observable
// An observable that emits `true` when the user is *sliding* the drawer,
// (i.e. moving the finger along the x-axis), or `false` when *scrolling* the page
// (i.e. moving the finger along the y-axis).
function getIsSlidingObservable(move$, start$) {
  var _this2 = this;

  // If the threshold options is set, we delay the decision until
  // the finger has moved at least `threshold` pixels in either direction.
  if (this.threshold) {
    var _context9;

    return (_context9 = (_context9 = _withLatestFrom.withLatestFrom.call(move$, start$), _skipWhile.skipWhile).call(_context9, function (_ref14) {
      var _ref15 = _slicedToArray(_ref14, 2),
          _ref15$ = _ref15[0],
          clientX = _ref15$.clientX,
          clientY = _ref15$.clientY,
          _ref15$2 = _ref15[1],
          startX = _ref15$2.clientX,
          startY = _ref15$2.clientY;

      return abs(startY - clientY) < _this2.threshold && abs(startX - clientX) < _this2.threshold;
    }), _map.map).call(_context9, function (_ref16) {
      var _ref17 = _slicedToArray(_ref16, 2),
          _ref17$ = _ref17[0],
          clientX = _ref17$.clientX,
          clientY = _ref17$.clientY,
          _ref17$2 = _ref17[1],
          startX = _ref17$2.clientX,
          startY = _ref17$2.clientY;

      return abs(startX - clientX) >= abs(startY - clientY);
    });

    // If the threshold option is set to `0` (or `false`) we make a decision immediately.
    // This is intended for Safari and possibly other browsers that have a built-in threshold.
    // Additionally, Safari ignores all calls to `preventDefault`, except on the first move event
    // after a start event, so that we *have to* make a decision immediately.
  } else {
    var _context10;

    return (_context10 = _withLatestFrom.withLatestFrom.call(move$, start$), _map.map).call(_context10, function (_ref18) {
      var _ref19 = _slicedToArray(_ref18, 2),
          _ref19$ = _ref19[0],
          clientX = _ref19$.clientX,
          clientY = _ref19$.clientY,
          event = _ref19$.event,
          _ref19$2 = _ref19[1],
          startX = _ref19$2.clientX,
          startY = _ref19$2.clientY;

      var isSliding = abs(startX - clientX) >= abs(startY - clientY);
      if (_this2.preventDefault && isSliding) event.preventDefault();
      return isSliding;
    });
  }
}

// ### Setup observables
// This function sets up the observable "pipeline".
function setupObservables() {
  var _context11,
      _this3 = this;

  // Emitts a value every time you change the `persistent` property of the drawer.
  // Interally, we invert it and call it `active`.
  var active$ = (_context11 = (_context11 = this[sPersitent$], _map.map).call(_context11, function (x) {
    return !x;
  }),

  // `share`ing the observable between many subscribers:
  _share.share).call(_context11);

  // We use this to get references to observables that aren't defined yet.
  var ref = {};

  // #### Start observable
  // Emits a value every time a start event *could* intiate an interaction.
  // Each emitted value is a hash containing a `clientX` and `clientY` key.
  var start$ = (_context11 = (_context11 = getStartObservable.call(this), filterWhen).call(_context11, active$), _share.share).call(_context11);

  // An observable that emits `true`, as long as the drawer isn't fully closed
  // (as long as the scrim is visible the user can still "catch" the drawer).
  // It references the yet-to-be-defined `translateX` obsevable, so we wrap it inside a `defer`.
  var isScrimVisible$ = _defer.defer.call(_Observable.Observable, function () {
    var _context12;

    return (_context12 = ref.translateX$, _map.map).call(_context12, function (translateX) {
      return _this3.align === 'left' ? translateX > 0 : translateX < _this3[sDrawerWidth];
    });
  });

  // TODO: ...
  var isInRange$ = (_context11 = (_context11 = (_context11 = _withLatestFrom.withLatestFrom.call(start$, isScrimVisible$), _map.map).call(_context11, function (_ref20) {
    var _ref21 = _slicedToArray(_ref20, 2),
        clientX = _ref21[0].clientX,
        isScrimVisible = _ref21[1];

    return isInRange.call(_this3, clientX, isScrimVisible);
  }),

  // When the user is sliding, fire the `slidestart` event.
  // Experimental: Set `overflow: hidden` on some container element.

  // Usually the cleanup code would run at the end of the fling animation,
  // but since there is no animation in this case, we call it directly.
  _do._do).call(_context11, function (inRange) {
    if (inRange) prepareInteraction.call(_this3);
  }), _share.share).call(_context11);

  // #### End observable
  // The observable of all relevant "end" events, i.e. the last `touchend` (or `mouseup`),
  var end$ = (_context11 = (_context11 = getEndObservable.call(this), filterWhen).call(_context11, active$, isInRange$), _share.share).call(_context11);

  // #### Move observable
  // The observable of all relevant "move" events.
  var move$ = (_context11 = (_context11 = getMoveObservable.call(this, start$, end$), filterWhen).call(_context11, active$, isInRange$), _share.share).call(_context11);

  // #### 'Is sliding?' observable
  // The value is `undefind` until we are ready to make a decision
  // An observable that emits `true` when the user is *sliding* the drawer,
  // (i.e. moving the finger along the x-axis), or `false` when *scrolling* the page
  // (i.e. moving the finger along the y-axis), and `undefined` while we aren't sure yet.
  //
  // (see [`getIsSlidingObservable`](#get-is-sliding-observable)),
  // then it remains `true`/`false` for the remainder of the interaction,
  // and is `undefined` again once the interaction `end`s.
  var isSliding$ = (_context11 = (_context11 = (_context11 = (_context11 = getIsSlidingObservable.call(this, move$, start$), _take.take).call(_context11, 1),
  // The initial velocity is zero.
  _startWith.startWith).call(_context11, undefined), _repeatWhen.repeatWhen).call(_context11, function () {
    return end$;
  }), _do._do).call(_context11, function (isSliding) {
    if (isSliding) {
      if (_this3[sScrollEl]) _this3[sScrollEl].style.overflow = 'hidden';
      _this3[_symbols.sFire]('slidestart', { detail: _this3.opened });
    }
  });

  // #### Translate X observable
  // The `translateX` observable is the central observable of this component.
  // It emits the current x-coordinate of the drawer, which
  // can be modified by either of 3 incoming observables:
  //
  // 1. The move observable (the user's finger/mouse moving across the screen),
  // 2. the animation/tween observable, and
  // 3. direct modifications of the `opened` state.
  //
  // It is wrapped in a `defer` because it depends on previous values of itself.
  ref.translateX$ = (_context11 = _defer.defer.call(_Observable.Observable, function () {
    var _context13;

    return _merge.merge.call(_Observable.Observable,
    // 1)
    // We only let move events modify the drawer's position when we are sure
    // that the user is sliding. In case the `preventDefault` option is enabled,
    // this is also when we're sure to call `preventDefault`.
    (_context13 = (_context13 = (_context13 = filterWhen.call(move$, isSliding$), _do._do).call(_context13, function (_ref22) {
      var event = _ref22.event;
      if (_this3.preventDefault) event.preventDefault();
    }), _withLatestFrom.withLatestFrom).call(_context13, start$, ref.startTranslateX$), _map.map).call(_context13, function (_ref23) {
      var _ref24 = _slicedToArray(_ref23, 3),
          clientX = _ref24[0].clientX,
          startX = _ref24[1].clientX,
          startTranslateX = _ref24[2];

      return calcTranslateX.call(_this3, clientX, startX, startTranslateX);
    }),

    // 2)
    // The tween observable can be used unmodified (see below),
    // but isn't defined yet, because it depends on previous values of `translateX$`.
    ref.tween$,

    // 3)
    // When the `opened` state changes, we "jump" to the new position,
    // which is either 0 (when closed) or the width of the drawer (when open).
    // We also want to jump when `align` chagnes, in this case to the other side of the viewport.
    (_context13 = (_context13 = _combineLatest.combineLatest.call(_Observable.Observable, _this3[sOpened$], _this3[sAlign$]), _do._do).call(_context13, function (_ref25) {
      var _ref26 = _slicedToArray(_ref25, 1),
          opened = _ref26[0];

      return cleanupInteraction.call(_this3, opened);
    }), _map.map).call(_context13, function (_ref27) {
      var _ref28 = _slicedToArray(_ref27, 2),
          opened = _ref28[0],
          align = _ref28[1];

      return !opened ? 0 : _this3[sDrawerWidth] * (align === 'left' ? 1 : -1);
    }));
  }), _share.share).call(_context11);

  // The `translateX` value at the start of an interaction.
  // Typically this would be either 0 or `drawerWidth`, but since the user can initiate
  // an interaction *during the animation*, it may be every value inbetween.
  // We obtain it by sampling the translate X observable at the beginning of each interaction.
  ref.startTranslateX$ = (_context11 = ref.translateX$, _sample.sample).call(_context11, start$);

  // #### Tween observable
  // For the tween animations we first need an observable that tracks
  // the current velocity of the drawer,
  // which we will use to determine whether the drawer should flinging in its direction,
  // or snap back into place.
  var velocity$ = (_context11 = (_context11 = (_context11 = (_context11 = (_context11 = ref.translateX$, _timestamp.timestamp).call(_context11), _pairwise.pairwise).call(_context11), _filter.filter).call(_context11, function (_ref29) {
    var _ref30 = _slicedToArray(_ref29, 2),
        prevTime = _ref30[0].timestamp,
        time = _ref30[1].timestamp;

    return time - prevTime > 0;
  }), _map.map).call(_context11, function (_ref31) {
    var _ref32 = _slicedToArray(_ref31, 2),
        _ref32$ = _ref32[0],
        prevX = _ref32$.value,
        prevTime = _ref32$.timestamp,
        _ref32$2 = _ref32[1],
        x = _ref32$2.value,
        time = _ref32$2.timestamp;

    return (x - prevX) / (time - prevTime);
  }), _startWith.startWith).call(_context11, 0);

  // There are 2 things that can trigger an animation:
  // 1. The end of an interaction, i.e. the user releases the finger/mouse while moving the slider.
  // 2. A call to a method like `open` or `close` (represented by a value on the animate observable)
  var tweenTrigger$ = _merge.merge.call(_Observable.Observable,
  // 1) When the user releases the finger/mouse, we take the current velocity of the drawer and
  // calculate whether it should open or close.
  (_context11 = (_context11 = _withLatestFrom.withLatestFrom.call(end$, ref.translateX$, velocity$), _map.map).call(_context11, function (_ref33) {
    var _ref34 = _slicedToArray(_ref33, 3),
        translateX = _ref34[1],
        velocity = _ref34[2];

    return calcWillOpen.call(_this3, velocity, translateX);
  }), _do._do).call(_context11, function (willOpen) {
    return _this3[_symbols.sFire]('slideend', { detail: willOpen });
  }),

  // 2) In this case we need to call the prepare code directly,
  // which would have been called at the beginning of the interaction otherwise.
  (_context11 = this[sAnimateTo$], _do._do).call(_context11, prepareInteraction.bind(this)));

  // We silently set the new `opened` state here,
  // so that the next interaction will do the right thing even while the animation is
  // still playing, e.g. a call to `toggle` will cancel the current animation
  // and initiate an animation to the opposite state.
  ref.tween$ = (_context11 = (_context11 = _do._do.call(tweenTrigger$, function (willOpen) {
    _this3[_symbols.sSetState]('opened', willOpen);
    if (_this3[sScrollEl] && !willOpen) _this3[sScrollEl].style.overflow = '';
  }), _withLatestFrom.withLatestFrom).call(_context11, ref.translateX$), _switchMap.switchMap).call(_context11, function (_ref35) {
    var _context14;

    var _ref36 = _slicedToArray(_ref35, 2),
        opened = _ref36[0],
        translateX = _ref36[1];

    // We return a tween observable that runs cleanup code when it completes
    // --- unless a new interaction is initiated, in which case it is canceled.
    var inv = _this3.align === 'left' ? 1 : -1;
    var endTranslateX = opened ? _this3[sDrawerWidth] * inv : 0;
    var diffTranslateX = endTranslateX - translateX;

    return (_context14 = (_context14 = (_context14 = (0, _common.createTween)(_common.linearTween, translateX, diffTranslateX, TRANSITION_DURATION), _do._do).call(_context14, { complete: function complete() {
        return _this3[sOpened$].next(opened);
      } }), _takeUntil.takeUntil).call(_context14, start$), _takeUntil.takeUntil).call(_context14, _this3[sAlign$]);
  });

  // #### Subscriptions
  // Now we are ready to cause some side effects.
  //
  // The end result is always to update the (shadow) DOM, which happens here.
  // Note that the call to subscribe sets the whole process in motion,
  // and causes the code inside the above `defer` observables to run.
  ref.translateX$.subscribe(updateDOM.bind(this));

  // A click on the scrim should close the drawer.
  _fromEvent.fromEvent.call(_Observable.Observable, this[sScrimEl], 'click').subscribe(function () {
    return _this3.close();
  });

  // Other than preventing sliding, setting `persistent` will also hide the scrim.
  active$.subscribe(function (active) {
    _this3[sScrimEl].style.display = active ? 'block' : 'none';
  });

  // Whenever the alignment of the drawer changes, update the CSS classes.
  this[sAlign$].subscribe(function (align) {
    var oldAlign = align === 'left' ? 'right' : 'left';
    _this3[sContentEl].classList.remove('hy-drawer-' + oldAlign);
    _this3[sContentEl].classList.add('hy-drawer-' + align);
  });

  // If the experimental back button feature is enabled, handle popstate events...
  (_context11 = _fromEvent.fromEvent.call(_Observable.Observable, window, 'popstate'), subscribeWhen).call(_context11, this[sBackButton$]).subscribe(function () {
    var hash = '#' + histId.call(_this3) + '--opened';
    var willOpen = window.location.hash === hash;
    if (willOpen !== _this3.opened) _this3[sAnimateTo$].next(willOpen);
  });
}

// ## Drawer Mixin
function drawerMixin(C) {
  // TODO: see ES6 mixins...
  return function (_componentMixin) {
    _inherits(_class, _componentMixin);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: _symbols.sSetup,


      // ### Setup
      // Overriding the setup function.
      value: function value(el, props) {
        _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), _symbols.sSetup, this).call(this, el, props);

        // Observables used for side effects caused by changing settings on the component.
        // The are used to emit the new vale whenever properties get changed on the component.
        this[sOpened$] = new _Subject.Subject();
        this[sAlign$] = new _Subject.Subject();
        this[sPersitent$] = new _Subject.Subject();
        this[sPreventDefault$] = new _Subject.Subject();
        this[sMouseEvents$] = new _Subject.Subject();
        this[sBackButton$] = new _Subject.Subject();
        this[sAnimateTo$] = new _Subject.Subject();

        // Cache DOM elements.
        this[sScrimEl] = this.root.querySelector('.hy-drawer-scrim');
        this[sContentEl] = this.root.querySelector('.hy-drawer-content');
        if (this._hideOverflow) this[sScrollEl] = document.querySelector(this._hideOverflow);

        // Set the initial alignment class.
        this[sContentEl].classList.add('hy-drawer-' + this.align);

        // Finally, calling the [setup observables function](#setup-observables) function.
        setupObservables.call(this);

        // Now we set the initial opend state.
        // If the experimental back button feature is enabled, we check the location hash...
        var hash = '#' + histId.call(this) + '--opened';
        if (window.location.hash === hash) this[_symbols.sSetState]('opened', true);
        this[sOpened$].next(this.opened);

        // Putting initial values on the side-effect--observables:
        this[sAlign$].next(this.align);
        this[sPersitent$].next(this.persistent);
        this[sPreventDefault$].next(this.preventDefault);
        this[sMouseEvents$].next(this.mouseEvents);
        this[sBackButton$].next(this._backButton);

        // Firing an event to let the outside world know the drawer is ready.
        this[_symbols.sFire]('init', { detail: this.opened });

        // Allow function chaining.
        return this;
      }

      // ### Options
      // The default values (and types) of the configuration options (required by hy-component)
      // See [Options](../../options.md) for usage information.

    }, {
      key: 'open',


      // ### Methods
      // Public methods of this component. See [Methods](../../methods.md) for more.
      value: function open() {
        var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        if (animated) this[sAnimateTo$].next(true);else this.opened = true;
        return this;
      }
    }, {
      key: 'close',
      value: function close() {
        var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        if (animated) this[sAnimateTo$].next(false);else this.opened = false;
        return this;
      }
    }, {
      key: 'toggle',
      value: function toggle() {
        var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        if (animated) this[sAnimateTo$].next(!this.opened);else this.opened = !this.opened;
        return this;
      }

      // TODO: These aren't finalized yet...

    }, {
      key: '_animateTo',
      value: function _animateTo(opened) {
        this[sAnimateTo$].next(opened);
        return this;
      }
    }, {
      key: '_jumpTo',
      value: function _jumpTo(opened) {
        this.opened = opened;
        return this;
      }
    }], [{
      key: 'componentName',

      // The name of the component (required by hy-component)
      get: function get() {
        return 'hy-drawer';
      }
    }, {
      key: 'defaults',
      get: function get() {
        return {
          opened: false,
          align: 'left',
          persistent: false,
          range: [0, 100],
          threshold: 10,
          preventDefault: false,
          mouseEvents: false,
          _backButton: false,
          _hideOverflow: null
        };
      }
    }, {
      key: 'types',
      get: function get() {
        return {
          opened: _types.bool,
          align: (0, _types.oneOf)(['left', 'right']),
          persistent: _types.bool,
          range: (0, _types.arrayOf)(_types.number),
          threshold: _types.number,
          preventDefault: _types.bool,
          mouseEvents: _types.bool,
          _backButton: _types.bool,
          _hideOverflow: _types.string
        };
      }

      // Side effects of changing configuration options (if any).
      // Mostly we just put the value on an observable and deal with it from there.

    }, {
      key: 'sideEffects',
      get: function get() {
        return {
          opened: function opened(x) {
            this[sOpened$].next(x);
          },
          align: function align(x) {
            this[sAlign$].next(x);
          },
          persistent: function persistent(x) {
            this[sPersitent$].next(x);
          },
          preventDefault: function preventDefault(x) {
            this[sPreventDefault$].next(x);
          },
          mouseEvents: function mouseEvents(x) {
            this[sMouseEvents$].next(x);
          },
          _backButton: function _backButton(x) {
            this[sBackButton$].next(x);
          },
          _hideOverflow: function _hideOverflow(selector) {
            if (this[sScrollEl]) this[sScrollEl].style.overflow = '';
            this[sScrollEl] = document.querySelector(selector);
          }
        };
      }
    }]);

    return _class;
  }((0, _component.componentMixin)(C));
}

// This concludes the implementation of push-state mixin.
// You can now check out
//
// * [vanilla / index.js](../vanilla/index.md)
// * [jquery / index.js](../jquery/index.md)
// * [webcomponent / index.js](../webcomponent/index.md)
//
// to see how it is used.
//
// [rxjs]: https://github.com/ReactiveX/rxjs
// [esmixins]: http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/
// [modernizr]: https://modernizr.com/