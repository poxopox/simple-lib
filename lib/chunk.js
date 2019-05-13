/**
 * @name chunk
 * @description Breaks an array into smaller chunks
 * @example
 * ```js
 * const input = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * const output = chunk(input,  5);
 * console.log(output);
 * // Logs out [[ 1, 2 ],[ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ]];
 * ```
 * @param {Array<any>} input
 * @param {Number} divisions
 * @returns {Array}
 */
export function chunk(input, divisions) {
  const source = [...input]; 
  const output = [];
  for (let d = 0; d < divisions; d++) {
    const chunk = [];
    for (let i = 0; i < input.length / divisions; i++) {
      chunk[i] = source.shift();
    }
    output.push(chunk);
  }
  return output;
}



