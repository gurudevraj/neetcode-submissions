class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const myMap = new Map()

        for (const str of strs) {
            const count = new Array(26).fill(0)

            for (const char of str) {
                count[char.charCodeAt(0) - 97]++
            }
            const key = count.join(',')
            if (!myMap.has(key)) {
                myMap.set(key, [])
            }
            myMap.set(key, [...myMap.get(key), str])
        }
        return Array.from(myMap.values())
    }
}
