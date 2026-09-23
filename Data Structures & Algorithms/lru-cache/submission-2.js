class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        // Dummy head and tail
        this.head = { key: -1, value: -1 };
        this.tail = { key: -1, value: -1 };

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key)) {
            return -1;
        }

        let node = this.map.get(key);

        // Recently used → move to front
        this.remove(node);
        this.insert(node);

        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // Key already exists
        if (this.map.has(key)) {
            let node = this.map.get(key);

            node.value = value;

            // Move to front
            this.remove(node);
            this.insert(node);

            return;
        }

        // New node
        let node = {
            key: key,
            value: value
        };

        this.map.set(key, node);
        this.insert(node);

        // Capacity exceeded
        if (this.map.size > this.capacity) {
            let lru = this.tail.prev;

            this.remove(lru);
            this.map.delete(lru.key);
        }
    }

    // Remove node from linked list
    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    // Insert node right after head
    insert(node) {
        let first = this.head.next;

        node.next = first;
        node.prev = this.head;

        this.head.next = node;
        first.prev = node;
    }
}