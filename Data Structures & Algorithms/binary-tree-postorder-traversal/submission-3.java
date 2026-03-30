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
    public List<Integer> postorderTraversal(TreeNode root) {
        Stack<TreeNode> s = new Stack<>();
        List<Integer> res = new ArrayList<>();
        TreeNode curr = root;

        while(curr != null || !s.isEmpty()){
            if(curr != null){
                s.push(curr);
                curr = curr.left;
            }else{
                TreeNode right = s.peek().right;
                if(right == null){
                    TreeNode currRoot = s.pop();
                    res.add(currRoot.val);
                    while(!s.isEmpty() && currRoot == s.peek().right){
                        currRoot = s.pop();
                        res.add(currRoot.val);
                    }  
                }else{
                    curr = right;
                }
            }
        }


        return res;

    }
}