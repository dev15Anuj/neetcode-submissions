class Solution {

    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {

        let result = [];

        let board = Array.from(
            { length: n },
            () => Array(n).fill(".")
        );

        let cols = new Set();
        let diag1 = new Set();
        let diag2 = new Set();

        function backtrack(row) {

            if (row === n) {
                result.push(board.map(row => row.join("")));
                return;
            }

            for (let col = 0; col < n; col++) {

                if (
                    cols.has(col) ||
                    diag1.has(row - col) ||
                    diag2.has(row + col)
                ) {
                    continue;
                }

                // Queen place
                board[row][col] = "Q";

                cols.add(col);
                diag1.add(row - col);
                diag2.add(row + col);

                // Next row
                backtrack(row + 1);

                // Undo
                board[row][col] = ".";

                cols.delete(col);
                diag1.delete(row - col);
                diag2.delete(row + col);
            }
        }

        backtrack(0);

        return result;
    }
}