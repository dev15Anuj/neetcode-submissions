class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let min = 0;
        let max = 0;

        for (let ch of s) {
            if (ch === '(') {
                min++;
                max++;
            } else if (ch === ')') {
                min--;
                max--;
            } else {
                min--;
                max++;
            }

            if (max < 0) {
                return false;
            }

            if (min < 0) {
                min = 0;
            }
        }

        return min === 0;
    }
}