# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:

    def rightCheck(self, curr: Optional[TreeNode], parent: Optional[TreeNode]) -> bool:
        if not curr:
            return True

        return curr.val > parent.val
    
    def leftCheck(self, curr: Optional[TreeNode], parent: Optional[TreeNode]) -> bool:
        if not curr:
            return True

        return curr.val < parent.val

    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True
        
        left = self.leftCheck(root.left, root)
        right = self.rightCheck(root.right, root)

        return left and right
        
        