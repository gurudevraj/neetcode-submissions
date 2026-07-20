class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let sum = 0
        let max = 0
        const n = prices.length

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (prices[j] - prices[i] > 0) {
                    sum = prices[j] - prices[i]
                }
                max = Math.max(max, sum)
            }
        }
        return max
    }
}
