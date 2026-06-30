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
        let prevNode = null;

        q.push(root);

        while(q.size() > 0){
            const len = q.size();

            for(let i = 0; i < len; i++){
                const curr = q.dequeue();

                if(curr.left){
                    q.enqueue(curr.left);
                    q.enqueue(curr.right);
                }

                if(prevNode){
                    prevNode.next = curr;
                }

                prevNode = curr;

                if(i === (len - 1)){
                    curr.next = null;
                    prevNode = null;
                }
            }
        }


        return root;
        
        
    }
}
