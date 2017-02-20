export function doesBrowserSupportSticky() {
  const testElement = document.createElement('test');
  return !!['', '-webkit-', '-moz-', '-ms-', '-o-'].find((prefix) => {
    testElement.style.position = `${prefix}sticky`;
    return testElement.style.position;
  });
}
