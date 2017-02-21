export default function () {
  return ['', '-webkit-', '-moz-', '-ms-', '-o-'].find((prefix) => {
    return this.el.style.position =`${prefix}sticky`;
  });
}
