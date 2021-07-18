export function track(element, callback) {
    var listener = function(p) {
        console.log(p.pageX, p.pageY);
        callback(p.pageX, p.pageY);
    }
    element.addEventListener("mousedown", () => {
        window.addEventListener("mousemove", listener);
    });
    element.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", listener);
    });
}
