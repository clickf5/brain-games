/**
 * Random number generator from a custom range
 * @param {number} min - start of range
 * @param {number} max - end of range
 */
export default (min, max) => Math.round(Math.random() * (max - min) + min);
