/** 
 * @name objectify
 * @description Maps two arrays into an object
 * @example
 * ```js
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * @param {Array} keys
 * @param {Array} values
 * @returns {Object}
 */
export function objectify(keys, values) {
    const output = {};
    for (let i = 0; i < keys.length; i++) {
        output[keys[i]] = values[i];
    }
    return output;
}






const keys = [ "name", "dateOfBirth", "city", "state", "zip" ];


const values = [ "lawrence", "04/11/1995", "st pete", "fl",  "33716" ];

let num = 3;
let str = "sdfgsfdg";

const output = objectify(keys,  values);
console.log(output);

let output = {
 name: "lawrence",
 dateOfBirth: "04/11/1995",
 city: "st pete",
 state: "fl",
 zip: "33716"
};