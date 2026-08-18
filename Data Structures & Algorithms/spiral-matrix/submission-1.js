class Solution {

    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        let res = [];

        let top = 0;
        let bottom = matrix.length - 1;
        let left = 0;
        let right = matrix[0].length - 1;

        while (top <= bottom && left <= right) {

            // Left -> Right
            for (let j = left; j <= right; j++) {
                res.push(matrix[top][j]);
            }
            top++;

            // Top -> Bottom
            for (let i = top; i <= bottom; i++) {
                res.push(matrix[i][right]);
            }
            right--;

            // Right -> Left
            if (top <= bottom) {
                for (let j = right; j >= left; j--) {
                    res.push(matrix[bottom][j]);
                }
                bottom--;
            }

            // Bottom -> Top
            if (left <= right) {
                for (let i = bottom; i >= top; i--) {
                    res.push(matrix[i][left]);
                }
                left++;
            }
        }

        return res;
    }
}