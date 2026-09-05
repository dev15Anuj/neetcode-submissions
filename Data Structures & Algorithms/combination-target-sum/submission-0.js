class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        const current = [];

        const backtrack = (start, remaining) => {
            // Target mil gaya
            if (remaining === 0) {
                result.push([...current]);
                return;
            }

            // Target cross ho gaya
            if (remaining < 0) {
                return;
            }

            for (let i = start; i < nums.length; i++) {
                // Current number choose karo
                current.push(nums[i]);

                // i hi pass kar rahe hain
                // kyunki same number dobara choose ho sakta hai
                backtrack(i, remaining - nums[i]);

                // Undo choice
                current.pop();
            }
        };

        backtrack(0, target);

        return result;
    }
}