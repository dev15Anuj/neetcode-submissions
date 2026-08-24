class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {

        // Agar root khatam ho gaya
        if (root === null) {
            return false;
        }

        // Current tree aur subRoot same hain?
        if (this.sameTree(root, subRoot)) {
            return true;
        }

        // Left ya right subtree mein search karo
        return this.isSubtree(root.left, subRoot) ||
               this.isSubtree(root.right, subRoot);
    }

    sameTree(p, q) {

        // Dono null -> same
        if (p === null && q === null) {
            return true;
        }

        // Ek null hai -> same nahi
        if (p === null || q === null) {
            return false;
        }

        // Values different -> same nahi
        if (p.val !== q.val) {
            return false;
        }

        // Left aur right dono same hone chahiye
        return this.sameTree(p.left, q.left) &&
               this.sameTree(p.right, q.right);
    }
}