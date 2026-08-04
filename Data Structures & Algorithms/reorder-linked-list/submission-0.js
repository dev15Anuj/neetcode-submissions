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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {

        // Test Case: [] or [1]
        if (head === null || head.next === null) {
            return;
        }

        // -----------------------------
        // Step 1: Find the middle node
        // -----------------------------
        let slow = head;
        let fast = head;

        while (fast.next !== null && fast.next.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // -----------------------------
        // Step 2: Reverse second half
        // -----------------------------
        let second = slow.next;
        slow.next = null; // Split the list into two halves

        let prev = null;

        while (second !== null) {
            let nextNode = second.next;
            second.next = prev;
            prev = second;
            second = nextNode;
        }

        // -----------------------------
        // Step 3: Merge both halves
        // -----------------------------
        let first = head;
        second = prev;

        while (second !== null) {
            let temp1 = first.next;
            let temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;
        }
    }
}