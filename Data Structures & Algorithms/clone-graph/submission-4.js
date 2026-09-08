class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (node === null) {
            return null;
        }

        const map = new Map();

        const dfs = (node) => {
            // Agar node already clone ho chuka hai
            if (map.has(node)) {
                return map.get(node);
            }

            // Current node ka clone banao
            const clone = new Node(node.val);

            // Pehle Map mein store karo
            map.set(node, clone);

            // Saare neighbors ko clone karo
            for (let neighbor of node.neighbors) {
                clone.neighbors.push(dfs(neighbor));
            }

            return clone;
        };

        return dfs(node);
    }
}