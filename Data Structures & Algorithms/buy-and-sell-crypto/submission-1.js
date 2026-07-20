class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let sum = 0
        let max = 0
        const n = prices.length
        let low = Infinity

        for (let i = 0; i < n; i++) {
            low = Math.min(low, prices[i])
            if (prices[i] - low > 0) {
                    sum = prices[i] - low
                    max = Math.max(max, sum)
                }
                
        }
        return max
    }
}
