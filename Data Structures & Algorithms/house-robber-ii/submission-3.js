class Solution {

    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        if (nums.length === 1) {
            return nums[0];
        }

        const robLinear = (start, end) => {
            let prev2 = 0;
            let prev1 = 0;

            for (let i = start; i <= end; i++) {
                let current = Math.max(
                    prev1,
                    prev2 + nums[i]
                );

                prev2 = prev1;
                prev1 = current;
            }

            return prev1;
        };

        // First house rob, last house skip
        let case1 = robLinear(0, nums.length - 2);

        // First house skip, last house rob
        let case2 = robLinear(1, nums.length - 1);

        return Math.max(case1, case2);
    }
}