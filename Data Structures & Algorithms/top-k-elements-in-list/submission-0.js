class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let map = new Map();

        // Count frequency
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        // Create buckets
        let bucket = Array(nums.length + 1).fill(0).map(() => []);

        // Place numbers in buckets
        for (let [num, freq] of map) {
            bucket[freq].push(num);
        }

        let result = [];

        // Traverse buckets from highest frequency
        for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
            for (let num of bucket[i]) {
                result.push(num);
                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}