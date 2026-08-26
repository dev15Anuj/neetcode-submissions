class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return [];

        let result = [];
        let queue = [root];

        while (queue.length > 0) {
            let size = queue.length;

            for (let i = 0; i < size; i++) {
                let node = queue.shift();

                // Last node of current level
                if (i === size - 1) {
                    result.push(node.val);
                }

                if (node.left) {
                    queue.push(node.left);
                }

                if (node.right) {
                    queue.push(node.right);
                }
            }
        }

        return result;
    }
}