class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Array(26).fill(0);

        let left = 0;
        let maxFreq = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {

            let index = s.charCodeAt(right) - 65;
            count[index]++;

            maxFreq = Math.max(maxFreq, count[index]);

            let windowLength = right - left + 1;
            let changes = windowLength - maxFreq;

            while (changes > k) {
                let leftIndex = s.charCodeAt(left) - 65;
                count[leftIndex]--;

                left++;

                windowLength = right - left + 1;
                changes = windowLength - maxFreq;
            }

            maxLength = Math.max(maxLength, windowLength);
        }

        return maxLength;
    }
}