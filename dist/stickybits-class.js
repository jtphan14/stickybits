(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.stickybits-class = global.stickybits-class || {})));
}(this, (function (exports) { 'use strict';

function StickyBit(target) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var defaults = {
    scrollTarget: window,
    stickyBitStickyOffset: '0',
    customVerticalPosition: false
  };

  this.el = target;
  this.opts = Object.assign(opts, defaults);

  if (doesBrowserSupportSticky()) {
    this.setCustomVerticalPosition();
  } else {
    this.manageStickiness();
  }
}

StickyBit.prototype.setCustomVerticalPosition = function setCustomVerticalPosition() {
  if (this.opts.customVerticalPosition === false) {
    this.el.style.top = this.opts.stickyBitStickyOffset + 'px';
  }
};

StickyBit.prototype.manageStickiness = function manageStickiness() {
  var el = this.el;
  var elClasses = this.el.classList;
  var elParent = el.parentNode;
  var scrollTarget = this.opts.scrollTarget;
  var stickyBitClass = 'js-is-sticky';
  var stickyBitIsStuckClass = 'js-is-stuck';
  var stickyBitStart = el.getBoundingClientRect().top;
  var stickyBitStop = stickyBitStart + elParent.offsetHeight - el.offsetHeight;
  elParent.classList.add('js-stickybit-parent');

  function stickiness() {
    var scroll = scrollTarget.scrollY;
    if (scroll < stickyBitStart) {
      if (elClasses.contains(stickyBitClass)) {
        elClasses.remove(stickyBitClass);
        this.el.style.position = '';
      }
      return;
    } else if (scroll > stickyBitStart && scroll < stickyBitStop) {
      if (!elClasses.contains(stickyBitClass)) elClasses.add(stickyBitClass);
      if (elClasses.contains(stickyBitIsStuckClass)) {
        elClasses.remove(stickyBitIsStuckClass);
        this.el.style.bottom = '';
      }
      this.el.style.position = 'fixed';
      if (this.opts.customVerticalPosition === false) {
        this.el.style.top = this.opts.stickyBitStickyOffset + 'px';
      }
      return;
    } else if (scroll > stop && !elClasses.contains(stickyBitIsStuckClass)) {
      elClasses.remove(stickyBitClass);
      elClasses.add(stickyBitIsStuckClass);
      this.el.style.top = '';
      this.el.style.bottom = '0';
      this.el.style.position = 'absolute';
      return;
    }
    return;
  }

  scrollTarget.addEventListener('scroll', function () {
    return scrollTarget.requestAnimationFrame(stickiness);
  });
};

if (typeof window !== 'undefined') {
  var plugin = window.$ || window.jQuery || window.Zepto;
  if (plugin) {
    plugin.fn.stickybits = function stickybitsPlugin(opts) {
      stickybits(this, opts);
      return;
    };
  }
}

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
