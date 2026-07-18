class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0
        let left = 0
        let right = heights.length - 1

        while (left < right) {
            const currHeight = Math.min(heights[left], heights[right])
            const width = right - left
            const currWater = currHeight * width
            maxWater = Math.max(maxWater, currWater)

            if (heights[left] > heights[right]) {
                right--
            } else {
                left++
            }
        }
        return maxWater
    }
}
