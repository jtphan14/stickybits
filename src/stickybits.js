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
import doesBrowserSupportSticky from './modules/doesBrowserSupportSticky';
import manageStickiness from './modules/manageStickiness';

function StickyBit(target, opts = {}) {
  const defaults = {
    scrollTarget: window,
    stickyBitStickyOffset: 0,
    customVerticalPosition: false,
  };
  this.el = target;
  this.opts = Object.assign(opts, defaults);
  ['', '-webkit-', '-moz-', '-ms-', '-o-'].find((prefix) => {
    this.el.style.position = `${prefix}sticky`;
    return this.el.style.position;
  });
  if (this.opts.customVerticalPosition === false) {
    this.el.style.top = `${this.opts.stickyBitStickyOffset}px`;
  }
}
// StickyBit.prototype.manageStickiness = manageStickiness();

export default function stickybits(target, opts) {
  // let els = typeof target === 'string' ? document.querySelectorAll(target) : target;
  // if (!('length' in els)) els = [els];
  console.log('here');
  console.log(new StickyBit(target, opts));
  return new StickyBit(target, opts);
  // for (el of els) {
  //   stickybit(el, opts);
  // }
}
