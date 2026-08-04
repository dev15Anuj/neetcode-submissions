class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Set();
        const cols = new Set();
        const boxes = new Set();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {

                const value = board[r][c];

                // Empty cell ignore karo
                if (value === '.') continue;

                // Unique keys banao
                const rowKey = `${r}-${value}`;
                const colKey = `${c}-${value}`;
                const boxKey = `${Math.floor(r / 3)}-${Math.floor(c / 3)}-${value}`;

                // Agar kahin duplicate mila
                if (
                    rows.has(rowKey) ||
                    cols.has(colKey) ||
                    boxes.has(boxKey)
                ) {
                    return false;
                }

                // Keys ko Set me add karo
                rows.add(rowKey);
                cols.add(colKey);
                boxes.add(boxKey);
            }
        }

        return true;
    }
}