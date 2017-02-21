(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.stickybits = factory());
}(this, (function () { 'use strict';

var doesBrowserSupportSticky = function () {
  var testElement = document.createElement('test');
  return !!['', '-webkit-', '-moz-', '-ms-', '-o-'].find(function (prefix) {
    testElement.style.position = prefix + 'sticky';
    return testElement.style.position;
  });
};

var manageStickiness = function () {
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

var setVerticalPosition = function () {
  if (this.opts.customVerticalPosition === false) {
    this.el.style.top = this.opts.stickyBitStickyOffset + "px";
  }
};

/* Stickybits 🍬
   ----------
   Default version
   ----------
   Includes:
   - browserSupportCheck
   - sticky management
   - vertical position setup
   Doesn't Include:
   - plugin setup (jQuery)
   - sticky support display
*/
function StickyBit(target) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var defaults = {
    scrollTarget: window,
    stickyBitStickyOffset: 0,
    customVerticalPosition: false
  };
  this.el = target;
  this.opts = Object.assign(opts, defaults);
  this.el.style.position = doesBrowserSupportSticky();
}

function stickybits(target, opts) {
  // let els = typeof target === 'string' ? document.querySelectorAll(target) : target;
  // if (!('length' in els)) els = [els];
  var stickyBit = new StickyBit(target, opts);
  stickyBit.prototype.setVerticalPosition = setVerticalPosition();
  stickyBit.prototype.manageStickiness = manageStickiness();
  // for (el of els) {
  //   stickybit(el, opts);
  // }
}

return stickybits;

})));
