class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for (let str of strs) {
            result += str.length + "#" + str;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            // # tak length find karo
            while (str[j] !== "#") {
                j++;
            }

            // length nikalo
            let length = Number(str.slice(i, j));

            // actual string nikalo
            let word = str.slice(j + 1, j + 1 + length);

            result.push(word);

            // next encoded string par jao
            i = j + 1 + length;
        }

        return result;
    }
}