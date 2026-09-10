class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = [];
        const current = [];
        const used = new Array(nums.length).fill(false);

        function backtrack() {
            // If current permutation is complete
            if (current.length === nums.length) {
                result.push([...current]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                // Skip number if already used
                if (used[i]) continue;

                // Choose
                current.push(nums[i]);
                used[i] = true;

                // Explore
                backtrack();

                // Undo choice
                current.pop();
                used[i] = false;
            }
        }

        backtrack();

        return result;
    }
}