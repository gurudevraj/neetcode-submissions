class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const n = s.length
        let max = 0

        for (let i = 0; i < n; i++) {
            const set = new Set()
            let curr = s[i]
            let count = 0
            while (!set.has(curr) && i + count < n) {
                count++
                set.add(curr)
                curr = s[i + count]
            }
            max = Math.max(max, count)
        }
        return max
    }
}
