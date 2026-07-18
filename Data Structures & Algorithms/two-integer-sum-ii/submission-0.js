class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let first = 0
        let last = numbers.length - 1

        while (first < last) {
            const sum = numbers[first] + numbers[last]
            if (sum === target) {
                return [first + 1, last + 1]
            } else if (sum > target) {
                last--
            } else {
                first++
            }
        }
        return []
    }
}
