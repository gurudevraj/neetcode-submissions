class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const frequencyCounter1 = {}
        const frequencyCounter2 = {}

        if (s.length !== t.length) return false

        for (let i of s) {
            frequencyCounter1[i] = ++frequencyCounter1[i] || 1
        }
        for (let i of t) {
            frequencyCounter2[i] = ++frequencyCounter2[i] || 1
        }
        for (let i in frequencyCounter1) {
            if (!frequencyCounter2[i] || frequencyCounter2[i] !== frequencyCounter1[i]) return false
            console.log(frequencyCounter1)
            console.log(frequencyCounter2)
        }
        return true
    }
}
