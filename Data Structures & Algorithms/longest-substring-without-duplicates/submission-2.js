class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // const n = s.length
        // let max = 0

        // for (let i = 0; i < n; i++) {
        //     const set = new Set()
        //     let curr = s[i]
        //     let count = 0
        //     while (!set.has(curr) && i + count < n) {
        //         count++
        //         set.add(curr)
        //         curr = s[i + count]
        //     }
        //     max = Math.max(max, count)
        // }
        // return max
    const charMap = new Map();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        // If the character is in the current window, move the left pointer
        if (charMap.has(char) && charMap.get(char) >= left) {
            left = charMap.get(char) + 1;
        }
        charMap.set(char, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
    }
}
