class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const len = temperatures.length
        const stack = []
        const result = new Array(len).fill(0)

        for (let i = 0; i < len; i++) {
            while (stack.length !== 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let prev = stack.pop()
                result[prev] = i - prev
            }
            stack.push(i)
        }
        return result
    }
}
