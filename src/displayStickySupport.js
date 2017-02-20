export function displayStickySupport() {
  if (doesBrowserSupportSticky()) {
    document.documentElement.setAttribute('data-sticky-supported', true);
  }
}
