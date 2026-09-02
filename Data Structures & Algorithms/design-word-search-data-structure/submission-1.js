class WordDictionary {
    constructor() {
        this.root = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;

        for (let ch of word) {
            if (!curr[ch]) {
                curr[ch] = {};
            }

            curr = curr[ch];
        }

        curr.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {

        const dfs = (index, curr) => {

            // Word complete
            if (index === word.length) {
                return curr.isEnd === true;
            }

            let ch = word[index];

            // Normal character
            if (ch !== '.') {
                if (!curr[ch]) {
                    return false;
                }

                return dfs(index + 1, curr[ch]);
            }

            // '.' => try every possible character
            for (let key in curr) {
                if (key !== "isEnd" && dfs(index + 1, curr[key])) {
                    return true;
                }
            }

            return false;
        };

        return dfs(0, this.root);
    }
}