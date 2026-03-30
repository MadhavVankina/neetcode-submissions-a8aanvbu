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
    public int maxDepth(TreeNode root) {
        Stack<Pair<TreeNode, Integer>> s = new Stack<>();
        s.push(new Pair<>(root, 1));
        int max = 0;

        while(!s.isEmpty()){
            Pair<TreeNode, Integer> p = s.pop();
            TreeNode node = p.getKey();
            int depth = p.getValue();

            if(node != null){
                max = Math.max(max, depth);
                s.push(new Pair<>(node.left, depth + 1));
                s.push(new Pair<>(node.right, depth + 1));
            }
        }

        return max;
    }
}
