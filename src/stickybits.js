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
import doesBrowserSupportSticky from './modules/doesBrowserSupportSticky';
import manageStickiness from './modules/manageStickiness';
import setVerticalPosition from './modules/setVerticalPosition';

function StickyBit(target, opts = {}) {
  const defaults = {
    scrollTarget: window,
    stickyBitStickyOffset: 0,
    customVerticalPosition: false,
  };
  this.el = target;
  this.opts = Object.assign(opts, defaults);
  this.el.style.position = doesBrowserSupportSticky();
}

export default function stickybits(target, opts) {
  // let els = typeof target === 'string' ? document.querySelectorAll(target) : target;
  // if (!('length' in els)) els = [els];
  const stickyBit = new StickyBit(target, opts);
  stickyBit.prototype.setVerticalPosition = setVerticalPosition();
  stickyBit.prototype.manageStickiness = manageStickiness();
  // for (el of els) {
  //   stickybit(el, opts);
  // }
}
