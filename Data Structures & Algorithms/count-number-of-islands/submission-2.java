class Solution {
    private final int[][] directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
    private int ROWS, COLS;
    public int numIslands(char[][] grid) {
        ROWS = grid.length;
        COLS = grid[0].length;
        int count = 0;

        for(int r = 0; r < ROWS; r++){
            for(int c = 0; c < COLS; c++){
                //dfs to count the no of islands
                if(grid[r][c] == '1'){    
                    dfs(grid, r, c);
                    count++;
                }
            }
        }

        return count;
    }

    private void dfs(char[][] grid, int r, int c){
        if(r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] == '0'){
            return;
        }

        grid[r][c] = '0';

        for(int[] dir : directions){
            dfs(grid, r + dir[0], c + dir[1]);
        }

    }
}
