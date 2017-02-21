export default function () {
  if (this.opts.customVerticalPosition === false) {
    this.el.style.top = `${this.opts.stickyBitStickyOffset}px`;
  }
}
