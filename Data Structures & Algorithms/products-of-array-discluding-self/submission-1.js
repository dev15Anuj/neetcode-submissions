class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const output = new Array(n);

        // Step 1: Left products
        let left = 1;

        for (let i = 0; i < n; i++) {
            output[i] = left;
            left *= nums[i];
        }

        // Step 2: Right products
        let right = 1;

        for (let i = n - 1; i >= 0; i--) {
            output[i] *= right;
            right *= nums[i];
        }

        return output;
    }
}