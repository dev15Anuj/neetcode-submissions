class Solution {

    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {

        class TrieNode {
            constructor() {
                this.children = {};
                this.word = null;
            }
        }

        // Build Trie
        const root = new TrieNode();

        for (let word of words) {
            let cur = root;

            for (let ch of word) {
                if (!cur.children[ch]) {
                    cur.children[ch] = new TrieNode();
                }

                cur = cur.children[ch];
            }

            cur.word = word;
        }

        const result = [];
        const m = board.length;
        const n = board[0].length;

        const dfs = (r, c, node) => {

            // Out of bounds
            if (r < 0 || r >= m || c < 0 || c >= n) {
                return;
            }

            const ch = board[r][c];

            // Character doesn't exist in Trie
            if (!node.children[ch]) {
                return;
            }

            const next = node.children[ch];

            // Word found
            if (next.word !== null) {
                result.push(next.word);

                // Avoid duplicate
                next.word = null;
            }

            // Mark visited
            board[r][c] = '#';

            // 4 directions
            dfs(r - 1, c, next); // up
            dfs(r + 1, c, next); // down
            dfs(r, c - 1, next); // left
            dfs(r, c + 1, next); // right

            // Restore
            board[r][c] = ch;
        };

        // Start DFS from every cell
        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                dfs(r, c, root);
            }
        }

        return result;
    }
}