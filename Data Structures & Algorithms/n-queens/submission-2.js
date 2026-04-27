class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const cols = new Set();
        const posDiag = new Set();
        const negDiag = new Set();
        const board = Array.from({ length: n}, () => Array(n).fill('.'));

        const res = [];

        const backtrack = (r) => {
            if(r == n){
                const currRes = board.map((c) => c.join(''));
                res.push(currRes);
                return;
            }


            for(let c = 0; c < n; c++){

                if(cols.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) continue;

                board[r][c] = 'Q';
                cols.add(c);
                posDiag.add(r + c);
                negDiag.add(r - c);

                backtrack(r + 1);

                board[r][c] = '.';
                cols.delete(c);
                posDiag.delete(r + c);
                negDiag.delete(r - c);
            }
        }

        backtrack(0)

        return res;
    }
}
