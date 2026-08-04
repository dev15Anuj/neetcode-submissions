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
     * @return {TreeNode}
     */
    invertTree(root) {

        // Test Case: Empty Tree
        if (root === null) {
            return null;
        }

        // Swap left and right child
        let temp = root.left;
        root.left = root.right;
        root.right = temp;

        // Invert left subtree
        this.invertTree(root.left);

        // Invert right subtree
        this.invertTree(root.right);

        return root;
    }
}