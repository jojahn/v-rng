export function track(element, callback, onLeave, step) {
  var currentStep = 0;
  var listener = function (p) {
    if (currentStep % step == 0) {
      callback(p.pageX, p.pageY);
    }
    currentStep++;
  };
  element.addEventListener("mousedown", () => {
    window.addEventListener("mousemove", listener);
  });
  element.addEventListener("mouseup", () => {
    window.removeEventListener("mousemove", listener);
    onLeave();
  });
  element.addEventListener("mouseleave", () => {
    window.removeEventListener("mousemove", listener);
    onLeave();
  });
}
