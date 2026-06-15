class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */

    // [4., 2., 7., 3., 4.]
    // [7., 4., 6., 4., 7.]
    // [6., 3,  5,  3,  6.]

    // [4,  2,  7.,  3,  4.]
    // [7., 4., 6., 4., 7.]
    // [6., 3., 5., 3., 6.]

    // [4, 2, 7., 3, 4.]
    // [7., 4., 6,. 4., 7.]
    // [6., 3, 5, 3, 6.]

    pacificAtlantic(heights) {
        const row = heights.length;
        const col = heights[0].length;

        const pac = Array.from({ length: row }, () => Array(col).fill(false));
        const atl = Array.from({ length: row }, () => Array(col).fill(false));

        const dfs = (r, c, visit, prev) => {
            if (r < 0 || c < 0 || r == row || c == col || visit[r][c] || prev > heights[r][c])
                return;

            visit[r][c] = true;
            dfs(r + 1, c, visit, heights[r][c]);
            dfs(r, c + 1, visit, heights[r][c]);
            dfs(r - 1, c, visit, heights[r][c]);
            dfs(r, c - 1, visit, heights[r][c]);
        };

        for (let r = 0; r < row; r++) {
            dfs(r, 0, pac, -1);
            dfs(r, col - 1, atl, -1);
        }

        for (let c = 0; c < col; c++) {
            dfs(0, c, pac, -1);
            dfs(row - 1, c, atl, -1);
        }

        const res = [];

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (pac[r][c] && atl[r][c]) {
                    res.push([r, c]);
                }
            }
        }

        return res;
    }
}
