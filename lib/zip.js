/**
 * @name zip
 * @description Combines multiple arrays into one in alternating order
 * @example
 * ```js
 * const input1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * const input2 = [ 'a', 'b', 'c', 'd', 'e', 'f', 'h', 'i', 'j' ];
 * const output = chunk(input1,  input2);
 * console.log(output);
 * // Logs out [1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e', 6, 'f', 7, 'g', 8, 'h', 9, 'i', 10, 'j'];
 * ```
 * @param {Array<any>} input
 * @param {Number} divisions
 * @returns {Array}
 */
export function zip(...arrays) {
  const output = [];
  for (let i = 0; i < arrays[0].length; i++) {
    for (let t = 0; t < arrays.length; t++) {
        output.push(arrays[t][i]);
    }
  }
  return output;
}
