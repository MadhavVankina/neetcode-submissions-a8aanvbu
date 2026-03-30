# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:   
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        
        stack = []
        node = root

        while node or stack:
            if node:
                stack.append(node)
                node = node.left
            else:
                curr = stack.pop()
                if curr and subRoot and curr.val == subRoot.val:
                    if self.isSameTree(curr, subRoot):
                        return True
                
                node = curr.right
                
        return False
        


    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if not p and not q:
            return True
        
        if p and q and p.val == q.val:
            left = self.isSameTree(p.left, q.left)
            right = self.isSameTree(p.right, q.right)

            return left and right
        else:
            return False
                