class Solution {

    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let rows = grid.length;
        let cols = grid[0].length;

        let queue = [];
        let fresh = 0;

        // Rotten oranges ko queue mein daalo
        // aur fresh oranges count karo
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c]);
                } else if (grid[r][c] === 1) {
                    fresh++;
                }
            }
        }

        let minutes = 0;
        let index = 0;

        let directions = [
            [-1, 0], // up
            [1, 0],  // down
            [0, -1], // left
            [0, 1]   // right
        ];

        // BFS
        while (index < queue.length && fresh > 0) {

            let size = queue.length - index;

            for (let i = 0; i < size; i++) {
                let [r, c] = queue[index++];

                for (let [dr, dc] of directions) {
                    let nr = r + dr;
                    let nc = c + dc;

                    if (
                        nr >= 0 &&
                        nr < rows &&
                        nc >= 0 &&
                        nc < cols &&
                        grid[nr][nc] === 1
                    ) {
                        grid[nr][nc] = 2;
                        fresh--;

                        queue.push([nr, nc]);
                    }
                }
            }

            minutes++;
        }

        return fresh === 0 ? minutes : -1;
    }
}