class Solution {

    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {

        let m = heights.length;
        let n = heights[0].length;

        let pacific = Array.from({ length: m }, () => Array(n).fill(false));
        let atlantic = Array.from({ length: m }, () => Array(n).fill(false));

        let directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ];

        function dfs(r, c, ocean) {

            ocean[r][c] = true;

            for (let [dr, dc] of directions) {

                let nr = r + dr;
                let nc = c + dc;

                if (
                    nr < 0 || nr >= m ||
                    nc < 0 || nc >= n
                ) {
                    continue;
                }

                if (ocean[nr][nc]) {
                    continue;
                }

                if (heights[nr][nc] < heights[r][c]) {
                    continue;
                }

                dfs(nr, nc, ocean);
            }
        }

        // Pacific Ocean
        for (let r = 0; r < m; r++) {
            dfs(r, 0, pacific);
        }

        for (let c = 0; c < n; c++) {
            dfs(0, c, pacific);
        }

        // Atlantic Ocean
        for (let r = 0; r < m; r++) {
            dfs(r, n - 1, atlantic);
        }

        for (let c = 0; c < n; c++) {
            dfs(m - 1, c, atlantic);
        }

        // Common cells
        let result = [];

        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {

                if (pacific[r][c] && atlantic[r][c]) {
                    result.push([r, c]);
                }

            }
        }

        return result;
    }
}