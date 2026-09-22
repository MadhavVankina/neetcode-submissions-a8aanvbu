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
        if(root == null) return null;

        const q = new Queue();

        q.enqueue(root);

        while(!q.isEmpty()){
            let size = q.size();
            while(!!size){
                const node = q.dequeue();
                if(size === 1){
                    node.next = null;
                }else{
                    const next = q.front();
                    node.next = next;
                }

                if(node.left){
                    q.enqueue(node.left);
                }

                if(node.right){
                    q.enqueue(node.right);
                }
                size--;
            }
            
        }

        return root;

    }
}
