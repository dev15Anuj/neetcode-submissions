class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const result = [];

        function dfs(node) {
            if (node === null) {
                result.push("N");
                return;
            }

            result.push(node.val);

            dfs(node.left);
            dfs(node.right);
        }

        dfs(root);

        return result.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const values = data.split(",");
        let index = 0;

        function dfs() {
            if (values[index] === "N") {
                index++;
                return null;
            }

            const node = new TreeNode(Number(values[index]));
            index++;

            node.left = dfs();
            node.right = dfs();

            return node;
        }

        return dfs();
    }
}