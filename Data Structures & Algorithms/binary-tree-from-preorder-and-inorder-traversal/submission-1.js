class Solution {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let map = new Map();

        // inorder ke har value ka index store karo
        for (let i = 0; i < inorder.length; i++) {
            map.set(inorder[i], i);
        }

        let preIndex = 0;

        function build(left, right) {
            if (left > right) {
                return null;
            }

            // preorder ka first element = root
            let rootValue = preorder[preIndex++];
            let root = new TreeNode(rootValue);

            // inorder me root ki position
            let mid = map.get(rootValue);

            // left subtree
            root.left = build(left, mid - 1);

            // right subtree
            root.right = build(mid + 1, right);

            return root;
        }

        return build(0, inorder.length - 1);
    }
}