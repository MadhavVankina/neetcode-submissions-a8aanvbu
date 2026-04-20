class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROW = board.length;
        const COL = board[0].length;

        const dfs = (i, j, n, visited) => {

            if(n === word.length) return true;

            if(i < 0 || i >= ROW || j < 0 || j >= COL || board[i][j] != word[n] || visited.has('' + i + j)){
                return false;
            }

            visited.add('' + i + j);
            const res = dfs(i + 1, j, n + 1, visited) || 
                        dfs(i - 1, j, n + 1, visited) || 
                        dfs(i, j + 1, n + 1, visited) || 
                        dfs(i, j - 1, n + 1, visited);
            visited.delete('' + i + j);
            return res;
        }



        for(let i = 0; i < ROW; i++){

            for(let j = 0; j < COL; j++){
                const set = new Set();
                if(dfs(i, j, 0, set)) return true;
            }
        }

        return false;

    }
}
