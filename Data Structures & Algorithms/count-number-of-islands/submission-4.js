class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const row = grid.length;
        const col = grid[0].length;

        let count = 0;

        const backtrack = (r, c) => {
            if (r < 0 || c < 0 || r == row || c == col || grid[r][c] == "0" || grid[r][c] == "#") {
                return;
            }

            grid[r][c] = '#';
            backtrack(r + 1, c);
            backtrack(r - 1, c);
            backtrack(r, c + 1);
            backtrack(r, c - 1);
        };

        for(let r = 0; r < row; r++){
            for(let c = 0; c < col; c++){
                if(grid[r][c] == '1'){
                    count++;
                    backtrack(r, c);
                }
            }
        }

        return count;
    }
}
