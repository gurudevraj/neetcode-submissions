class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const newMap = new Map()

        for (let i=0; i<nums.length; i++) {
            const currentNum = nums[i]
            const rest = target - currentNum

            if (newMap.has(rest)) {
                return [newMap.get(rest), i]
            }
            newMap.set(currentNum, i)
        }
    }
}
