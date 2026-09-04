class Solution {

    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {

        const heap = [];

        const push = (num) => {
            heap.push(num);

            let i = heap.length - 1;

            while (i > 0) {
                let parent = Math.floor((i - 1) / 2);

                if (heap[parent] <= heap[i]) break;

                [heap[parent], heap[i]] = [heap[i], heap[parent]];

                i = parent;
            }
        };

        const pop = () => {
            const last = heap.pop();

            if (heap.length === 0) return;

            heap[0] = last;

            let i = 0;

            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let smallest = i;

                if (
                    left < heap.length &&
                    heap[left] < heap[smallest]
                ) {
                    smallest = left;
                }

                if (
                    right < heap.length &&
                    heap[right] < heap[smallest]
                ) {
                    smallest = right;
                }

                if (smallest === i) break;

                [heap[i], heap[smallest]] =
                    [heap[smallest], heap[i]];

                i = smallest;
            }
        };

        for (let num of nums) {
            push(num);

            if (heap.length > k) {
                pop();
            }
        }

        return heap[0];
    }
}