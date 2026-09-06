class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        // Count frequency of each task
        const freq = new Array(26).fill(0);

        for (const task of tasks) {
            freq[task.charCodeAt(0) - 65]++;
        }

        // Find the maximum frequency
        const maxFreq = Math.max(...freq);

        // Number of tasks having maximum frequency
        let maxCount = 0;

        for (const count of freq) {
            if (count === maxFreq) {
                maxCount++;
            }
        }

        // Minimum cycles based on the most frequent task
        const result =
            (maxFreq - 1) * (n + 1) + maxCount;

        // We never need more cycles than the number of tasks
        return Math.max(tasks.length, result);
    }
}