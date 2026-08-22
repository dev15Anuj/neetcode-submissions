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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // Dono null hain
        if (p === null && q === null) return true;

        // Ek null hai
        if (p === null || q === null) return false;

        // Values alag hain
        if (p.val !== q.val) return false;

        // Left aur Right dono same hone chahiye
        return this.isSameTree(p.left, q.left) &&
               this.isSameTree(p.right, q.right);
    }
}