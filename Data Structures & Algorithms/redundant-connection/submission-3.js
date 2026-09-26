class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length;

        const parent = Array.from({ length: n + 1 }, (_, i) => i);

        function find(x) {
            if (parent[x] !== x) {
                parent[x] = find(parent[x]);
            }
            return parent[x];
        }

        function union(a, b) {
            const rootA = find(a);
            const rootB = find(b);

            // Same root means cycle
            if (rootA === rootB) {
                return false;
            }

            parent[rootA] = rootB;
            return true;
        }

        for (const [a, b] of edges) {
            if (!union(a, b)) {
                return [a, b];
            }
        }

        return [];
    }
}