export const TWO_PI = Math.PI * 2;

export function shortestAngleDelta(from, to) {
    let delta = (to - from) % TWO_PI;
    if (delta > Math.PI) delta -= TWO_PI;
    if (delta < -Math.PI) delta += TWO_PI;
    return delta;
  }

export function deg2Rad(deg) {
    var pi = Math.PI;
    return deg * (pi / 180);
  }
  
  export function radian2deg(rad) {
    var pi = Math.PI;
    return rad * (180 / pi);
  }
  
  export function rotate2d(alpha, { x, y }) {
    return {
      x: Math.cos(alpha) * x - Math.sin(alpha) * y,
      y: Math.sin(alpha) * x + Math.cos(alpha) * y
    };
  }
  