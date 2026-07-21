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
    const n = s.length
    let right = 0
    let max = 0
    

    while (right < n) {
        const set = new Set()
        let curr = s[right]
        let temp = 0

        while (!set.has(curr) && temp + right < n) {
            temp++
            set.add(curr)
            curr = s[right + temp]
        }
        max = Math.max(max, temp)
        right = right + temp
    }
    return max
    }
}
