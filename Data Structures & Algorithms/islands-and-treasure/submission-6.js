class Solution {
    /**
     * @param {number[][]} grid
     */
    // [#, -1, 0, 1]
    // [#, #, 1, -1]
    // [1, -1, #, -1]
    // [0, -1, #, #]
    islandsAndTreasure(grid) {
        const row = grid.length;
        const col = grid[0].length;
        const sides = [[1, 0], [0, 1], [-1, 0], [0, -1]];

        const q = [];

        for(let r = 0; r < row; r++){
            for(let c = 0; c < col; c++){
                if(grid[r][c] == 0){
                    q.push([r, c]);
                }
            }
        }// 0(m*n)

        
        while(q.length > 0){
            const [rc, cc] = q.shift(); // .shift() is O(1) || .pop() in array is 0(n)
            const val = grid[rc][cc] + 1;
            
            for(let [i, j] of sides){
                const [r, c] = [rc + i, cc + j];
                if(r < 0 || c < 0 || r == row || c == col || grid[r][c] == -1 || val >= grid[r][c]){
                    continue;
                }
                
                grid[r][c] = val;
                q.push([r, c]);
            }
        }
    }
}
