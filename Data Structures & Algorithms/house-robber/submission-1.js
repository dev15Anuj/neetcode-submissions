class Solution {

    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let prev2 = 0;
        let prev1 = 0;

        for (let money of nums) {
            let current = Math.max(prev1, prev2 + money);

            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }
}