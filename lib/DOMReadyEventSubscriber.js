/*
 * This file is part of the EventBusJS library.
 *
 * Copyright (c) 2016 LIN3S <info@lin3s.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Beñat Espiña <benatespina@gmail.com>
 * @author Mikel Tuesta <mikel@lin3s.com>
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventSubscriber2 = require('./EventSubscriber');

var _EventSubscriber3 = _interopRequireDefault(_EventSubscriber2);

var _DOMReadyEvent = require('./DOMReadyEvent');

var _DOMReadyEvent2 = _interopRequireDefault(_DOMReadyEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DOMReadyEventSubscriber = function (_EventSubscriber) {
  _inherits(DOMReadyEventSubscriber, _EventSubscriber);

  function DOMReadyEventSubscriber(aCallback) {
    _classCallCheck(this, DOMReadyEventSubscriber);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DOMReadyEventSubscriber).call(this, aCallback));
  }

  _createClass(DOMReadyEventSubscriber, [{
    key: 'isSubscribedTo',
    value: function isSubscribedTo(anEvent) {
      return anEvent instanceof _DOMReadyEvent2.default;
    }
  }]);

  return DOMReadyEventSubscriber;
}(_EventSubscriber3.default);

exports.default = DOMReadyEventSubscriber;