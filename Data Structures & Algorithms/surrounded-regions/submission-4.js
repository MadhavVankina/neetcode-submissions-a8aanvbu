class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */

    solve(board) {
        const row = board.length;
        const col = board[0].length;
        const visited = Array.from({length: row}, () => Array(col).fill(false))

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r == row || c == col) return false;

            if (board[r][c] == "X") return true;

            board[r][c] = "X";

            const res = dfs(r + 1, c) && dfs(r - 1, c) && dfs(r, c + 1) && dfs(r, c - 1);

            if (!res) {
                board[r][c] = "O";
            }
            visited[r][c] = true;
            console.log(r, c, res);
            return res;
        };

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (board[r][c] == "O" && !visited[r][c]) {
                    dfs(r, c);
                }
            }
        }
    }
}
