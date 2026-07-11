class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let len = s?.length
        if (!len) return true
        if (len === 1) return true
        let first = s[0]
        let last = s[len - 1]
        for (let i = 0; i < len/2; i++) {
            first = s[i]
            last = s[len-i-1]
            if (first === last) {
                continue
            } else {
                return false
            }
        }
        return true
        
    }
}
