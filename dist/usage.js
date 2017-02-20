(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

function doesBrowserSupportSticky() {
  var testElement = document.createElement('test');
  return !!['', '-webkit-', '-moz-', '-ms-', '-o-'].find(function (prefix) {
    testElement.style.position = prefix + 'sticky';
    return testElement.style.position;
  });
}

console.log(doesBrowserSupportSticky());

})));
