class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const answer = new Array(n).fill(0);
        const stack = []; // Stores indices

        for (let i = 0; i < n; i++) {

            // Current temperature is warmer than the temperature
            // at the index on top of the stack.
            while (
                stack.length > 0 &&
                temperatures[i] > temperatures[stack[stack.length - 1]]
            ) {
                const index = stack.pop();
                answer[index] = i - index;
            }

            stack.push(i);
        }

        return answer;
    }
}