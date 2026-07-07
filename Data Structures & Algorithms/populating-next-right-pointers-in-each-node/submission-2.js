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
        if(root === null) return root;

        const q = new Queue();
        q.enqueue(root);

        while(!q.isEmpty()){
            const len = q.size();

            for(let i = 0; i < len; i++){
                const node = q.dequeue();
                if(i != (len - 1)){
                    node.next = q.front();
                }

                if(node.left){
                    q.enqueue(node.left);
                }

                if(node.right){
                    q.enqueue(node.right);
                }
            }
        }

        return root;
    }
}
