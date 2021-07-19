export function fadeOut(callback, time, step) {
    const usingQuadratic = (percentage) => (Math.pow(percentage - 1, 2));
    return animate(callback, time, step, usingQuadratic);
}

export function animate(callback, time, step, stepFunction = (x) => x) {
    var index = 0;
    var interval = setInterval(() => {
        callback(stepFunction((index * step) / time));
        index++;
    }, step);
    var timeout = setTimeout(() => {
        clearInterval(interval);
    }, time);
    return { timeout, interval };
}

export function stopAnimation({ timeout, interval }) {
    clearInterval(interval);
    clearTimeout(timeout);
}