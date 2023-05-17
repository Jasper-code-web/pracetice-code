function n(e, s) {
  new ResizeObserver((r) => {
    s(r[0].contentRect);
  }).observe(e);
}
const o = (e) => {
  e.directive("resize", {
    mounted(s, t) {
      n(s, t.value);
    }
  });
};
n.install = o;
export {
  n as default
};
