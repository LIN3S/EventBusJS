# CHANGELOG

This changelog references the relevant changes done between versions.

To get the diff for a specific change, go to https://github.com/LIN3S/EventBusJS/commit/XXX where XXX is the change hash 
To get the diff between two versions, go to https://github.com/LIN3S/EventBusJS/compare/v0.8.0...v0.9.0

* 0.10.0 (dev-master)
    * Refactored NodeAddedEventPublisher API and implementation.
* 0.9.0
    * Refactored NodeAddedEventPublisher DOM lookup.
    * Exported bundle configurations updated. (umd, common, esm)
    * Refactored NodeAddedObserver added node's matching strategy. It now accepts any native css selectors.
    * Added onNodeAdded documentation.
    * Removed Bower support.
    * Removed `lodash.debounce` as peer dependency.
* 0.8.0
    * Refactored NodeAddedObserver added node's matching strategy. It now accepts any native css selectors.
    * Added onNodeAdded documentation.
    * Removed Bower support.
    * Removed `lodash.debounce` as peer dependency
* 0.7.0
    * `LifeTimeEventPublisher` will work as the previously named `EventPublisher` did.
    * `OneTimeEventPublisher` will track published events, so a subscriber's callback will be inmediately executed if subscribed after the associated event is published.
    * [BC break] `EventPublisher` is now an *abstract* class. `OneTimeEventPublisher` and `LifeTimeEventPublisher` instances are exported instead.
    * [BC break] `NodeAddedObserver` is no longer exported. Instead, `onNodeAdded` subscription is exposed.  
    * The `EventSubscriberPriorityQueue`'s `getSubscribers` method now returns an immutable object.
    * Refactored `DomLoadedEventPublisher` to check the initial document's readyState.
    * Refactored `DomReadyEventPublisher` to check the initial document's readyState.
    * Exported named `Core` and `Subscriptions` for a more dev-friendly use.
    * Refactored library folder structure.
* 0.6.1
    * Allowed negative priorities.
* 0.6.0
    * [BC break] Updated NodeAddedObserver to provide each associated node with the subscribed selectorClassName. 
    After this version, published NodeAddedEvent gives you an array of matching nodes instead of a single one. 
