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

    // []
    // [1]
    // 1 -> [2, 3], 

    connect(root) {
        if(root == null){
            return root;
        }

        const q = new Queue();
        q.enqueue(root);

        while(q.size() > 0){
            const size = q.size();

            for(let i = 0; i < size; i++){
                const node = q.dequeue();
                
                if(i !== (size - 1)){
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