class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const row = board.length;
        const col = board[0].length;
        const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];

        const dfs = (i, j) => {
            if(i < 0 || j < 0 || i == row || j == col || board[i][j] !== 'O') return;

            board[i][j] = 'T';
            for(let [r, c] of dir){
                dfs(i + r, j + c);
            }
        }

        const isBorder = (i, j) => {
            if(i == 0 || j == 0 || i == row - 1 || j == col - 1) return true;

            return false;
        }

        for(let r = 0; r < row; r++){
            for(let c = 0; c < col; c++){
                const curr = board[r][c];
                if(curr == 'O' && isBorder(r, c)){
                    dfs(r, c);
                }
            }
        }

        for(let r = 0; r < row; r++){
            for(let c = 0; c < col; c++){
                board[r][c]
                if(board[r][c] == 'O'){
                    board[r][c] = 'X';
                }
            }
        }

        for(let r = 0; r < row; r++){
            for(let c = 0; c < col; c++){
                board[r][c]
                if(board[r][c] == 'T'){
                    board[r][c] = 'O';
                }
            }
        }
    }
}
