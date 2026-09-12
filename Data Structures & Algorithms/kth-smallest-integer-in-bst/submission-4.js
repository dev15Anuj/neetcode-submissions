/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let stack = [];
        let current = root;

        while (current || stack.length > 0) {

            // Left side
            while (current) {
                stack.push(current);
                current = current.left;
            }

            // Node process
            current = stack.pop();

            k--;

            if (k === 0) {
                return current.val;
            }

            // Right side
            current = current.right;
        }
    }
}