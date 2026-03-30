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
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    rob(root) {
        const dfs = (node) => {
            if (!node) {
                return [0, 0];
            }

            const left = dfs(node.left);
            const right = dfs(node.right);

            const withRoot = node.val + left[1] + right[1];
            const withoutRoot = Math.max(...left) + Math.max(...right);

            return [withRoot, withoutRoot];
        }

        return Math.max(...dfs(root));

    }
}
