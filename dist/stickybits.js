(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.stickybits = factory());
}(this, (function () { 'use strict';

/* Stickybits 🍬
   ----------
   Default version
   ----------
   Includes:
   - browserSupportCheck
   - addStickyPropValue
   - sticky management
   - vertical position setup
   Doesn't Include:
   - plugin setup (jQuery)
   - sticky support display
*/
function StickyBit(target) {
  var _this = this;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var defaults = {
    scrollTarget: window,
    stickyBitStickyOffset: 0,
    customVerticalPosition: false
  };
  this.el = target;
  this.opts = Object.assign(opts, defaults);
  ['', '-webkit-', '-moz-', '-ms-', '-o-'].find(function (prefix) {
    _this.el.style.position = prefix + 'sticky';
    return _this.el.style.position;
  });
  if (this.opts.customVerticalPosition === false) {
    this.el.style.top = this.opts.stickyBitStickyOffset + 'px';
  }
}
// StickyBit.prototype.manageStickiness = manageStickiness();

function stickybits(target, opts) {
  // let els = typeof target === 'string' ? document.querySelectorAll(target) : target;
  // if (!('length' in els)) els = [els];
  console.log('here');
  console.log(new StickyBit(target, opts));
  return new StickyBit(target, opts);
  // for (el of els) {
  //   stickybit(el, opts);
  // }
}

return stickybits;

})));
