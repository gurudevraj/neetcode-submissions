class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let sum = 1
        let hasZero = false
        let zeroCount = 0
        for (const num of nums) {
            if (num === 0) {
                hasZero = true
                zeroCount++
                continue
            }
            sum *= num
        }
        if (nums.length === zeroCount) {
            return new Array(zeroCount).fill(0)
        }
        const result = []
        for (const num of nums) {
            if (hasZero && num === 0) {
                result.push(sum)
            } else if (hasZero) {
                result.push(0)
            } else {
                result.push(sum/num)
            }
        }
        return result
    }
}
