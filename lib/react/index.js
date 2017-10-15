'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactDrawer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mixin = require('../mixin');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) 2017 Florian Klampfer <https://qwtel.com/>
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

var ReactDrawer = exports.ReactDrawer = function (_drawerMixin) {
  _inherits(ReactDrawer, _drawerMixin);

  function ReactDrawer(props) {
    _classCallCheck(this, ReactDrawer);

    var _this = _possibleConstructorReturn(this, (ReactDrawer.__proto__ || Object.getPrototypeOf(ReactDrawer)).call(this, props));

    _this.defaultProps = {
      tagName: 'div'
    };
    return _this;
  }

  _createClass(ReactDrawer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setupComponent(this.rel, this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // TODO: what about style?
      return _react2.default.createElement(this.props.tagName, { ref: function ref(el) {
          _this2.rel = el;
        } }, _react2.default.createElement('div', { className: 'y-drawer-scrim' }), _react2.default.createElement('div', { className: 'y-drawer-content' }, this.props.children));
      // return (
      //   <div ref={(el) => { this.rel = el; }}>
      //     <div className="y-drawer-scrim" />
      //     <div className="y-drawer-content">{this.props.children}</div>
      //   </div>
      // );
    }
  }]);

  return ReactDrawer;
}((0, _mixin.drawerMixin)(_react.Component));