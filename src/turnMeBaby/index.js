/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
	if(typeof str != 'string') { throw "error"; }
  var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
    }
    return newString;
};

export default turnMeBaby;
