class Solution {
    int ROWS, COLS;
    int[][] directions = {{1, 0}, {0, 1}, {-1, 0}, {0, -1}};

    public void solve(char[][] board) {
        // 1. Do dfs on all the border O's and change to O's to T's O -> T
        ROWS = board.length;
        COLS = board[0].length;

        for(int r = 0; r < ROWS; r++){
            for(int c = 0; c < COLS; c++){
                if(r == 0 || r == (ROWS - 1) || c == 0 || c == (COLS - 1)){
                    dfs(r, c, board);
                }
            }
        }

        // 2. Change all the remaining O's to X's O -> X
        for(int r = 0; r < ROWS; r++){
            for(int c = 0; c < COLS; c++){
                if(board[r][c] == 'O'){
                    board[r][c] = 'X';
                }
            }
        }

        // 3. Change all the T's to O's T -> O
        for(int r = 0; r < ROWS; r++){
            for(int c = 0; c < COLS; c++){
                if(board[r][c] == 'T'){
                    board[r][c] = 'O';
                }
            }
        }
    }

    private void dfs(int r, int c, char[][] board){
        if(r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] != 'O'){
            return;
        }

        board[r][c] = 'T';

        for(int[] dir : directions){
            dfs(r + dir[0], c + dir[1], board);
        }
    }
}
