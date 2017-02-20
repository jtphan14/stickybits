(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.stickybits-class = global.stickybits-class || {})));
}(this, (function (exports) { 'use strict';

function stickybits(target, opts) {
  return new StickyBit(target, opts);
}

function doesBrowserSupportSticky() {
  var testElement = document.createElement('test');
  return !!['', '-webkit-', '-moz-', '-ms-', '-o-'].find(function (prefix) {
    testElement.style.position = prefix + 'sticky';
    return testElement.style.position;
  });
}

function applyStickySupportedHTMLAttribute() {
  if (doesBrowserSupportSticky()) {
    document.documentElement.setAttribute('data-sticky-supported', true);
  }
}

exports['default'] = stickybits;
exports.doesBrowserSupportSticky = doesBrowserSupportSticky;
exports.applyStickySupportedHTMLAttribute = applyStickySupportedHTMLAttribute;

Object.defineProperty(exports, '__esModule', { value: true });

})));
