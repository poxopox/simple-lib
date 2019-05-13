/**
 * @name reverse
 * @description Reverses the order of an array
 * @example
 * ```js
 * const input = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * const output = reverse(input,  5);
 * console.log(output);
 * // Logs out [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
 * ```
 * @param {Array} input
 * @returns {Array}
 */

export function reverse(input) {
    const output = [];
    for (let i = 0; i < input.length; i++) {
        output[i] = input[(input.length - 1) - i];   
    }
    return output;
}