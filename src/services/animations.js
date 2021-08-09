export const usingQuadraticFadeOut = (percentage) => (Math.pow(percentage - 1, 2));
// -4 (x - 0.5)² + 1
export const usingQuadratic = (percentage) => ((-4) * Math.pow(percentage - 0.5, 2) + 1);



export function fadeOut(callback, time, step, onEnd) {
    return animate(callback, time, step, usingQuadraticFadeOut, onEnd);
}

export function animate(callback, time, step, stepFunction = (x) => x, onEnd) {
    var index = 0;
    var interval = setInterval(() => {
        callback(stepFunction((index * step) / time));
        index++;
    }, step);
    var timeout = setTimeout(() => {
        clearInterval(interval);
        if (!!onEnd && typeof(onEnd) === "function") {
            onEnd();
        }
    }, time);
    return { timeout, interval };
}

export function stopAnimation({ timeout, interval }) {
    clearInterval(interval);
    clearTimeout(timeout);
}