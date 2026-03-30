/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (!root) return 'N';
        const res = [];
        const queue = new Queue();
        queue.push(root);

        while (!queue.isEmpty()) {
            const node = queue.pop();
            if (!node) {
                res.push('N');
            } else {
                res.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            }
        }
        return res.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const vals = data.split(',');
        const val = vals.shift();
        const root = new TreeNode();

        if (val === 'N') {
            return null;
        }

        root.val = parseInt(val);
        const q = new Queue();
        q.push(root);

        while (!q.isEmpty()) {
            const node = q.pop();

            if (vals.length) {
                const val = vals.shift();
                if (val !== 'N') {
                    node.left = new TreeNode(parseInt(val));
                    q.push(node.left);
                }
            }

            if (vals.length) {
                const val = vals.shift();
                if (val !== 'N') {
                    node.right = new TreeNode(parseInt(val));
                    q.push(node.right);
                }
            }
        }

        return root;
    }
}
