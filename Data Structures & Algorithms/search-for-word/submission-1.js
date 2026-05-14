class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROW = board.length;
        const COL = board[0].length;

        const dfs = (i, j, n) => {

            if(n === word.length) return true;

            if(i < 0 || i >= ROW || j < 0 || j >= COL || board[i][j] != word[n]){
                return false;
            }

            const res = dfs(i + 1, j, n + 1) || dfs(i - 1, j, n + 1) || dfs(i, j + 1, n + 1) || dfs(i, j - 1, n + 1);

            return res;
        }

        for(let i = 0; i < ROW; i++){
            for(let j = 0; j < COL; j++){
                if(dfs(i, j, 0)) return true;
            }
        }

        return false;

    }
}
