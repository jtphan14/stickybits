/* Stickybits
   ----------
*/
import { doesBrowserSupportSticky } from './doesBrowserSupportySticky';

function StickyBit(target, opts = {}) {
  const defaults = {
    scrollTarget: window,
    stickyBitStickyOffset: 0,
    customVerticalPosition: false,
  };
  this.el = target;
  this.opts = Object.assign(opts, defaults);
}
StickyBit.prototype.setCustomVerticalPosition = function setCustomVerticalPosition() {
  if (this.opts.customVerticalPosition === false) {
    this.el.style.top = `${this.opts.stickyBitStickyOffset}px`;
  }
};
StickyBit.prototype.manageStickiness = function manageStickiness() {
  const el = this.el;
  const elClasses = this.el.classList;
  const elParent = el.parentNode;
  const scrollTarget = this.opts.scrollTarget;
  const stickyBitClass = 'js-is-sticky';
  const stickyBitIsStuckClass = 'js-is-stuck';
  const stickyBitStart = el.getBoundingClientRect().top;
  const stickyBitStop = (stickyBitStart + elParent.offsetHeight) - el.offsetHeight;
  elParent.classList.add('js-stickybit-parent');

  function stickiness() {
    const scroll = scrollTarget.scrollY;
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
        this.el.style.top = `${this.opts.stickyBitStickyOffset}px`;
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
  scrollTarget.addEventListener('scroll', () => scrollTarget.requestAnimationFrame(stickiness));
};

export default function stickybits(target, opts) {
  let els = typeof target === 'string' ? document.querySelectorAll(target) : target;
  if (!('length' in els)) els = [els];
  for (let i = 0; i < els.length; i += 1) {
    const el = els[i];
    stickybit(el, opts);
  }
}
