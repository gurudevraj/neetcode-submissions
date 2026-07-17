class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let sum = 1
        let hasZero = false
        for (const num of nums) {
            if (num === 0) {
                hasZero = true
                continue
            }
            sum *= num
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
