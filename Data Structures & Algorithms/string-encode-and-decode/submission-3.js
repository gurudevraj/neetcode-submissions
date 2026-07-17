class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        if (strs.length === 1 && strs[0] === '#') return '#'

        for (const str of strs) {
            result += str.length + '#' + str
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {
        const result = [];
    let i = 0;

    while (i < s.length) {
        // Find where the delimiter symbol sits for the current string segment
        let delimiterIdx = s.indexOf('#', i);
        
        // Extract the length digits and parse to an integer
        let length = parseInt(s.substring(i, delimiterIdx));
        
        // Move our pointer right past the '#' symbol
        i = delimiterIdx + 1;
        
        // Extract the actual string using the known length
        let str = s.substring(i, i + length);
        result.push(str);
        
        // Advance the pointer past the extracted string to start the next one
        i += length;
    }

    return result;
    }
}
