class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // const len = temperatures.length
        // const stack = []
        // const result = new Array(len).fill(0)

        // for (let i = 0; i < len; i++) {
        //     while (stack.length !== 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
        //         let prev = stack.pop()
        //         result[prev] = i - prev
        //     }
        //     stack.push(i)
        // }
        // return result

        const n = temperatures.length
        const stack = []
        const result = new Array(n).fill(0)

        for (let i = 0; i < n; i++) {
            while (stack.length > 0 && temperatures[i] > temperatures[stack.at(-1)]) {
                const prevIndex = stack.pop()
                result[prevIndex] =  i - prevIndex
            }
            stack.push(i)
        }
        return result
    }
}
