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
    public TreeNode invertTree(TreeNode root) {
        if(root == null) return null;

        Stack<TreeNode> s = new Stack<>();
        s.push(root);

        while(!s.isEmpty()){
            TreeNode node = s.pop();
            TreeNode temp = node.left;
            node.left = node.right;
            node.right = temp;

            if(node.left != null) s.push(node.left);
            if(node.right != null) s.push(node.right);
        }

        return root;
    }
}
