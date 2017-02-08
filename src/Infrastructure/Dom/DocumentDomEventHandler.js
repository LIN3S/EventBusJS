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

class DocumentDomEventHandler { // implementa el DomEventHandler
  constructor(document) {
    this.document = document;
  }

  onReadyHandle(eventPublisher) {
    this.document.addEventListener('DOMContentLoaded', () => {
      eventPublisher.publish(
        new DomEvent(
          new DomEventType(
            DomEventType.DOM_READY
          )
        )
      );
    });

  }

  onLoadedHandle(event) {

  }
}

export default DocumentDomEventHandler;
