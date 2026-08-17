class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const arr = this.keyStore.get(key);
        if (!arr || arr.length === 0) return "";

        let lo = 0, hi = arr.length - 1;
        let result = "";

        while (lo <= hi) {
            const mid = (lo + hi) >> 1;
            if (arr[mid][0] <= timestamp) {
                result = arr[mid][1];
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

        return result;
    }
}