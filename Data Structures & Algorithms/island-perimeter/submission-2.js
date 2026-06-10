class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    // Since there is only one island doing dfs on first seen land block is enough
    // params needed - r, c
    // base case?
    // if(r < 0 || c < 0 || r == row || c == col || grid[r][c] == 0) -> res+1 return;
    // 
    islandPerimeter(grid) {
        let res = 0;
        const row = grid.length;
        const col = grid[0].length;

        const dfs = (r, c) => {
            if(r < 0 || c < 0 || r == row || c == col || grid[r][c] == 0) {
                res++;
                return;
            }

            if(grid[r][c] == '#'){
                return;
            }

            grid[r][c] = '#';

            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        }

        for(let r = 0; r < row; r++){
            for(let c = 0; c < col; c++){
                if(grid[r][c] == 1){
                    dfs(r, c);
                    break;
                }
            }
        }

        return res;
    }
}
