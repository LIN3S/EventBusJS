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