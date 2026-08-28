class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = [];

        for (let num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        // Add element
        this.heap.push(val);

        // Heapify Up
        let i = this.heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (this.heap[parent] <= this.heap[i]) {
                break;
            }

            [this.heap[parent], this.heap[i]] =
            [this.heap[i], this.heap[parent]];

            i = parent;
        }

        // Keep only k largest elements
        if (this.heap.length > this.k) {
            // Remove minimum element (root)
            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.pop();

            // Heapify Down
            let i = 0;

            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let smallest = i;

                if (
                    left < this.heap.length &&
                    this.heap[left] < this.heap[smallest]
                ) {
                    smallest = left;
                }

                if (
                    right < this.heap.length &&
                    this.heap[right] < this.heap[smallest]
                ) {
                    smallest = right;
                }

                if (smallest === i) {
                    break;
                }

                [this.heap[i], this.heap[smallest]] =
                [this.heap[smallest], this.heap[i]];

                i = smallest;
            }
        }

        return this.heap[0];
    }
}