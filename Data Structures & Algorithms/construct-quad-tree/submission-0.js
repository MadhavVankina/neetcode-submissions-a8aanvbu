/**
 * // Definition for a QuadTree node.
 * class Node {
 *     constructor(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *         this.val = val;
 *         this.isLeaf = isLeaf;
 *         this.topLeft = topLeft;
 *         this.topRight = topRight;
 *         this.bottomLeft = bottomLeft;
 *         this.bottomRight = bottomRight;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number[][]} grid
     * @return {Node}
     */

    // 1 - check if all the elements in the node are same

    construct(grid) {
        const dfs = (n, r, c) => {
            let allSame = true;

            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    if (grid[r][c] != grid[r + i][c + j]) {
                        allSame = false;
                        break;
                    }
                }
            }

            if (allSame) {
                return new Node(grid[r][c] === 1, true);
            }

            const md = Math.floor(n / 2);
            const topLeft = dfs(md, r, c);
            const topRight = dfs(md, r, c + md);
            const bottomLeft = dfs(md, r + md, c);
            const bottomRight = dfs(md, r + md, c + md);

            return new Node(false, false, topLeft, topRight, bottomLeft, bottomRight);
        }

        return dfs(grid.length, 0, 0);
    }
}
