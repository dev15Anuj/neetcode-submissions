class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {

        candidates.sort((a, b) => a - b);

        const result = [];

        function backtrack(start, current, remaining) {

            // Target mil gaya
            if (remaining === 0) {
                result.push([...current]);
                return;
            }

            for (let i = start; i < candidates.length; i++) {

                // Duplicate combination avoid karo
                if (i > start && candidates[i] === candidates[i - 1]) {
                    continue;
                }

                // Sum target se bada ho gaya
                if (candidates[i] > remaining) {
                    break;
                }

                current.push(candidates[i]);

                // i + 1 because each element can be used only once
                backtrack(i + 1, current, remaining - candidates[i]);

                // Backtrack
                current.pop();
            }
        }

        backtrack(0, [], target);

        return result;
    }
}