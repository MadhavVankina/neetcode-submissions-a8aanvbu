class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const row = board.length;
        const col = board[0].length;

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r == row || c == col || board[r][c] == "X" || board[r][c] == "T")
                return;

            board[r][c] = "T";
            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        };

        for (let r = 0; r < row; r++) {
            if (board[r][0] == "O") dfs(r, 0);

            if (board[r][col - 1] == "O") dfs(r, col - 1);
        }

        for (let c = 0; c < col; c++) {
            if (board[0][c] == "O") dfs(0, c);

            if (board[row - 1][c] == "O") dfs(row - 1, c);
        }

        for(let r = 0; r < row; r++){
            for(let c = 0; c < col; c++){
                if(board[r][c] == 'O') board[r][c] = 'X';
                else if(board[r][c] == 'T') board[r][c] = 'O';
            }
        }

    }
}
