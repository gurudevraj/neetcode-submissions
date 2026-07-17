class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0
        if (nums.length === 1) return 1
        const set = new Set(nums)
        let streak = 0

        for (let i = 0; i < nums.length; i++) {
            let count = 0
            let num = nums[i]

            if (set.has(num-1)) {
                count++
                while (set.has(num)) {
                    count++
                    num = num + 1
                }
                streak = Math.max(streak, count)
            }
        }
        return streak
    }
}
