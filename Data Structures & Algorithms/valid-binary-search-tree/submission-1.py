# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True
        
        left = self.isValidBST(root.left)
        right = self.isValidBST(root.right)

        lc = root.left.val < root.val if root.left else True
        rc = root.right.val > root.val if root.right else True

        return left and right and lc and rc