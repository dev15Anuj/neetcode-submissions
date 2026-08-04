// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;

        const map = new Map();

        // Step 1: Create copy of every node
        let curr = head;
        while (curr) {
            map.set(curr, new Node(curr.val));
            curr = curr.next;
        }

        // Step 2: Set next and random pointers
        curr = head;
        while (curr) {
            const copy = map.get(curr);
            copy.next = curr.next ? map.get(curr.next) : null;
            copy.random = curr.random ? map.get(curr.random) : null;
            curr = curr.next;
        }

        // Step 3: Return copied head
        return map.get(head);
    }
}