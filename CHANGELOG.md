# CHANGELOG

This changelog references the relevant changes done between versions.

To get the diff for a specific change, go to https://github.com/LIN3S/EventBusJS/commit/XXX where XXX is the change hash 
To get the diff between two versions, go to https://github.com/LIN3S/EventBusJS/compare/v0.5.0...v0.6.0

* 0.7.0
    * The EventSubscriberPriorityQueue's getSubscribers method now returns an immutable object.
    * Refactored DomLoadedEventPublisher to check the initial document's readyState.
    * Refactored DomReadyEventPublisher to check the initial document's readyState.
    * Exported named `Core` and `Subscriptions` for a more dev-friendly use.
    * Refactored library folder structure.
* 0.6.1
    * Allowed negative priorities.
* 0.6.0
    * [BC break] Updated NodeAddedObserver to provide each associated node with the subscribed selectorClassName. 
    After this version, published NodeAddedEvent gives you an array of matching nodes instead of a single one. 
