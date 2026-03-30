/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
       

      
        List<Integer> res = new ArrayList<>();
        if(root == null) return res;

        Stack<TreeNode> s = new Stack<>();
        TreeNode curr = root;
        s.push(curr);
        while(!s.isEmpty()){
            curr = s.pop();
            res.add(curr.val);

            if(curr.right != null){
                s.push(curr.right);
            }

            if(curr.left != null){
                s.push(curr.left);
            }
        }

        return res;
    }
}