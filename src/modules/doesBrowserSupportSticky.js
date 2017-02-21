export default function () {
  const testElement = document.createElement('test');
  const isStickySupported = !['', '-webkit-', '-moz-', '-ms-', '-o-'].find((prefix) => {
    testElement.style.position = `${prefix}sticky`;
    return testElement.style.position;
  });
  return isStickySupported;
}
