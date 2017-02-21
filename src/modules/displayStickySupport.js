export default function () {
  if (doesBrowserSupportSticky()) {
    document.documentElement.setAttribute('data-sticky-supported', true);
  }
}
