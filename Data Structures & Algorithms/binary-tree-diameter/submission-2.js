class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let diameter = 0;

        function height(node) {
            if (node === null) {
                return 0;
            }

            let leftHeight = height(node.left);
            let rightHeight = height(node.right);

            // Diameter passing through current node
            diameter = Math.max(diameter, leftHeight + rightHeight);

            // Height of current node
            return 1 + Math.max(leftHeight, rightHeight);
        }

        height(root);

        return diameter;
    }
}