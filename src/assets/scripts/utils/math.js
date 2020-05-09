export const clamp = (min, max) => (value) => value < min ? min : value > max ? max : value

export const lerp = (a, b, x) => a * (1 - x) + b * x

export const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c