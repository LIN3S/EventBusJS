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

var EventSubscriber = function () {
  function EventSubscriber(aCallback) {
    _classCallCheck(this, EventSubscriber);

    // Following code makes this class Abstract, but UglifyJS does not recognizes "new." operator yet.
    //     if (new.target === Abstract) {
    //       throw new TypeError('Cannot construct Abstract instances directly');
    //     }

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