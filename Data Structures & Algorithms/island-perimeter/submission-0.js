class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        let result = 0;
        const row = grid.length;
        const col = grid[0].length;

        const calculatePerimeter = (r, c) => {
            if (grid[r][c] === 0) return;

            if (r - 1 < 0 || (grid[r - 1][c] === 0)) {
                result++;
            }

            if (r + 1 == row || (grid[r + 1][c] === 0)) {
                result++;
            }

            if (c - 1 < 0 || (grid[r][c - 1] === 0)) {
                result++;
            }

            if (c + 1 == col || (grid[r][c + 1] === 0)) {
                result++;
            }
        };

        for(let r = 0; r < row; r++){
            for(let c = 0; c < col; c++){
                calculatePerimeter(r, c);
            }
        }

        return result;
    }
}
