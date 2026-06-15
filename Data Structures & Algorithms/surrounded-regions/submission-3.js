class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    // [x, x, x, x]
    // [x, o, o, x]
    // [x, o, x, x]
    // [x, o, x, x]

    // [o, x, x, o, x]
    // [x, o, o, x, o]
    // [x, o, x, o, x]
    // [o, x, o, o, o]
    // [x, x, o, x, o]

    // [o, x, x, o, x]
    // [x, x, x, x, o]
    // [x, x, x, x, x]
    // [o, x, o, o, o]
    // [x, x, o, x, o] 

    solve(board) {
        const row = board.length;
        const col = board[0].length;

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r == row || c == col) return false;

            if (board[r][c] == "X") return true;

            board[r][c] = "X";

            const res = dfs(r + 1, c) && dfs(r - 1, c) && dfs(r, c + 1) && dfs(r, c - 1);

            if (!res) {
                board[r][c] = "O";
            }
            return res;
        };

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (board[r][c] == "O") {
                    dfs(r, c);
                }
            }
        }
    }
}
