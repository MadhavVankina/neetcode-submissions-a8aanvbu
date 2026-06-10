class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const row = grid.length;
        const col = grid[0].length;

        let max = 0;

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r == row || c == col || grid[r][c] == "#" || grid[r][c] == 0) {
                return 0;
            }

            grid[r][c] = "#";
            const res = 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);

            return res;
        };

        for(let r = 0; r < row; r++){
            for(let c = 0; c < col; c++){
                if(grid[r][c] == 1){
                    max = Math.max(max, dfs(r, c));
                }
            }
        }

        return max;
    }
}
