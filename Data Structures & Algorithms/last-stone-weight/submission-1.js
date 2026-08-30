class Solution {

    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {

        const heap = [];

        const push = (val) => {
            heap.push(val);

            let i = heap.length - 1;

            while (i > 0) {
                let parent = Math.floor((i - 1) / 2);

                if (heap[parent] >= heap[i]) break;

                [heap[parent], heap[i]] = [heap[i], heap[parent]];

                i = parent;
            }
        };

        const pop = () => {
            const max = heap[0];
            const last = heap.pop();

            if (heap.length > 0) {
                heap[0] = last;

                let i = 0;

                while (true) {
                    let left = 2 * i + 1;
                    let right = 2 * i + 2;
                    let largest = i;

                    if (left < heap.length && heap[left] > heap[largest]) {
                        largest = left;
                    }

                    if (right < heap.length && heap[right] > heap[largest]) {
                        largest = right;
                    }

                    if (largest === i) break;

                    [heap[i], heap[largest]] = [heap[largest], heap[i]];

                    i = largest;
                }
            }

            return max;
        };

        // Add all stones to Max Heap
        for (let stone of stones) {
            push(stone);
        }

        // Smash two heaviest stones
        while (heap.length > 1) {

            let y = pop();
            let x = pop();

            if (x !== y) {
                push(y - x);
            }
        }

        return heap.length === 0 ? 0 : heap[0];
    }
}