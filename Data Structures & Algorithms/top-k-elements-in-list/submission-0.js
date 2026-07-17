class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {}
        for (const num of nums) {
            obj[num] = ++obj[num] || 1
        }
        let sortable = [];
for (var item in obj) {
    sortable.push([item, obj[item]]);
}

sortable.sort(function(a, b) {
    return b[1] - a[1];
})
const result = []
for (let i = 0; i < k; i++) {
result.push(sortable[i][0])
}

return result
}
}