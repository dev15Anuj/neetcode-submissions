class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const deque = []; // stores indices
        const res = [];
        let front = 0; // pointer instead of shift()

        for (let i = 0; i < nums.length; i++) {

            // Remove indices outside current window
            if (front < deque.length && deque[front] <= i - k) {
                front++;
            }

            // Remove smaller elements from back
            while (deque.length > front &&
                   nums[deque[deque.length - 1]] < nums[i]) {
                deque.pop();
            }

            // Add current index
            deque.push(i);

            // Window complete
            if (i >= k - 1) {
                res.push(nums[deque[front]]);
            }
        }

        return res;
    }
}