(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Event2 = require('./Event');

var _Event3 = _interopRequireDefault(_Event2);

var _EventTypes = require('./EventTypes');

var _EventTypes2 = _interopRequireDefault(_EventTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DOMReadyEvent = function (_Event) {
  _inherits(DOMReadyEvent, _Event);

  function DOMReadyEvent() {
    _classCallCheck(this, DOMReadyEvent);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DOMReadyEvent).call(this, _EventTypes2.default.DOM_READY));
  }

  return DOMReadyEvent;
}(_Event3.default);

exports.default = DOMReadyEvent;

},{"./Event":3,"./EventTypes":6}],2:[function(require,module,exports){


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
      var event = new _DOMReadyEvent2.default();

      return anEvent.getName() === event.getName();
    }
  }]);

  return DOMReadyEventSubscriber;
}(_EventSubscriber3.default);

exports.default = DOMReadyEventSubscriber;

},{"./DOMReadyEvent":1,"./EventSubscriber":5}],3:[function(require,module,exports){


'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Event = function () {
  function Event(aName) {
    _classCallCheck(this, Event);

    this.name = aName;
  }

  _createClass(Event, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }]);

  return Event;
}();

exports.default = Event;

},{}],4:[function(require,module,exports){


'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventPublisher = function () {
  function EventPublisher() {
    _classCallCheck(this, EventPublisher);

    this.id = 0;
    this.subscribers = {};
  }

  _createClass(EventPublisher, [{
    key: 'subscribe',
    value: function subscribe(aSubscriber) {
      var id = this.id;

      this.subscribers[id] = aSubscriber;
      this.id++;

      return id;
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe(aSubscriberId) {
      this.subscribers.removeProperty(aSubscriberId);
    }
  }, {
    key: 'publish',
    value: function publish(anEvent) {
      for (var subscriber in this.subscribers) {
        if (this.subscribers[subscriber].isSubscribedTo(anEvent)) {
          this.subscribers[subscriber].handle(anEvent);
        }
      }
    }
  }]);

  return EventPublisher;
}();

var instance = new EventPublisher();

exports.default = instance;

},{}],5:[function(require,module,exports){


'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventSubscriber = function () {
  function EventSubscriber(aCallback) {
    _classCallCheck(this, EventSubscriber);

    this.callback = aCallback;
  }

  _createClass(EventSubscriber, [{
    key: 'handle',
    value: function handle(anEvent) {
      return this.callback(anEvent);
    }
  }, {
    key: 'isSubscribedTo',
    value: function isSubscribedTo(anEvent) {}
  }]);

  return EventSubscriber;
}();

exports.default = EventSubscriber;

},{}],6:[function(require,module,exports){


'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var EventTypes = {
  DOM_READY: 'DOM_READY'
};

exports.default = EventTypes;

},{}],7:[function(require,module,exports){


'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventTypes = exports.EventSubscriber = exports.EventPublisher = exports.Event = exports.DOMReadyEventSubscriber = exports.DOMReadyEvent = undefined;

var _DOMReadyEvent = require('./DOMReadyEvent');

var _DOMReadyEvent2 = _interopRequireDefault(_DOMReadyEvent);

var _DOMReadyEventSubscriber = require('./DOMReadyEventSubscriber');

var _DOMReadyEventSubscriber2 = _interopRequireDefault(_DOMReadyEventSubscriber);

var _Event = require('./Event');

var _Event2 = _interopRequireDefault(_Event);

var _EventPublisher = require('./EventPublisher');

var _EventPublisher2 = _interopRequireDefault(_EventPublisher);

var _EventSubscriber = require('./EventSubscriber');

var _EventSubscriber2 = _interopRequireDefault(_EventSubscriber);

var _EventTypes = require('./EventTypes');

var _EventTypes2 = _interopRequireDefault(_EventTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DOMReadyEvent = _DOMReadyEvent2.default;
exports.DOMReadyEventSubscriber = _DOMReadyEventSubscriber2.default;
exports.Event = _Event2.default;
exports.EventPublisher = _EventPublisher2.default;
exports.EventSubscriber = _EventSubscriber2.default;
exports.EventTypes = _EventTypes2.default;

},{"./DOMReadyEvent":1,"./DOMReadyEventSubscriber":2,"./Event":3,"./EventPublisher":4,"./EventSubscriber":5,"./EventTypes":6}]},{},[7]);
