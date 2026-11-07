
class Solution {
    
    copyRandomList(head) {
        if (!head) return null;

        const map = new Map();
        let curr = head;
        while (curr) {
            map.set(curr, new Node(curr.val));
            curr = curr.next;
        }
        curr = head;
        while (curr) {
            const copy = map.get(curr);
            copy.next = curr.next ? map.get(curr.next) : null;
            copy.random = curr.random ? map.get(curr.random) : null;
            curr = curr.next;
        }
        return map.get(head);
    }
}