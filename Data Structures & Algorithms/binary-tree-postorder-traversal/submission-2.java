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
        TreeNode currRoot = root;

        while(currRoot != null || !s.isEmpty()){
            if(currRoot != null){
                s.push(currRoot);
                currRoot = currRoot.left;
            }else{
                TreeNode right = s.peek().right;
                if(right == null){
                    right = s.pop();
                    res.add(right.val);
                    while(!s.isEmpty() && right == s.peek().right){
                        right = s.pop();
                        res.add(right.val);
                    }
                }else{
                    currRoot = right;
                }
            }
        }

        return res;
    }
}