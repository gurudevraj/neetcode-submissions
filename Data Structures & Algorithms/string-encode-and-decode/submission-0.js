class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""

        for (const str of strs) {
            result += str.length + '#' + str
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = []
        let i = 0
        // while (i < str.length) {

        // }
        const res = str.split('#')
        for (let i = 0; i < res.length; i++) {
            if (i !== 0) {
                const cut = i === res.length - 1 ? res[i].length : res[i].length - 1
                result.push(res[i].substring(0, cut))
            }
        }
        return result
    }
}
