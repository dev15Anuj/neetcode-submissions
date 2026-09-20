class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let dummy = new ListNode(0, head);
        let groupPrev = dummy;

        while (true) {
            // Find the kth node
            let kth = groupPrev;

            for (let i = 0; i < k; i++) {
                kth = kth.next;

                // Fewer than k nodes left
                if (kth === null) {
                    return dummy.next;
                }
            }

            let groupNext = kth.next;

            // Reverse the group
            let prev = groupNext;
            let curr = groupPrev.next;

            while (curr !== groupNext) {
                let temp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = temp;
            }

            // Connect previous group with reversed group
            let temp = groupPrev.next;
            groupPrev.next = kth;
            groupPrev = temp;
        }
    }
}