/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, left = null, right = null, next = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} root
     * @return {Node}
     */
    connect(root) {
        if (!root) return root;

        const q = new Queue();
        q.enqueue(root);

        while (!q.isEmpty()) {
            let size = q.size();
            while (size > 0) {
                const curr = q.dequeue();
                if (size !== 1) {
                    curr.next = q.front();
                }

                if (curr.left) {
                    q.enqueue(curr.left);
                }

                if (curr.right) {
                    q.enqueue(curr.right);
                }
                size--;
            }
        }

        return root;
    }
}
