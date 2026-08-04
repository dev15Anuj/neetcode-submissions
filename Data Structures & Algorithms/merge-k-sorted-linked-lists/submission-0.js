/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) return null;

        return this.divide(lists, 0, lists.length - 1);
    }

    divide(lists, left, right) {
        if (left === right) return lists[left];

        let mid = Math.floor((left + right) / 2);

        let l1 = this.divide(lists, left, mid);
        let l2 = this.divide(lists, mid + 1, right);

        return this.mergeTwoLists(l1, l2);
    }

    mergeTwoLists(l1, l2) {
        let dummy = new ListNode();
        let curr = dummy;

        while (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }

        curr.next = l1 !== null ? l1 : l2;

        return dummy.next;
    }
}