class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (let str of strs) {
            // Sort karke common key banao
            const key = str.split("").sort().join("");

            // Agar key pehle nahi hai to empty array banao
            if (!map.has(key)) {
                map.set(key, []);
            }

            // Original string ko us group me add karo
            map.get(key).push(str);
        }

        // Map ki values return karo
        return Array.from(map.values());
    }
}