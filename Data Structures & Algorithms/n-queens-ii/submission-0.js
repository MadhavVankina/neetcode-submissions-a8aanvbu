class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    totalNQueens(n) {
        const cols = new Set();
        const pD = new Set(); // (r + c)
        const nD = new Set(); // (r - c)
        let res = 0;

        const backtrack = (r) => {
            if(r === n) {
                res++;
                return;
            }

            for(let c = 0; c < n; c++){
                if(cols.has(c) || pD.has(r + c) || nD.has(r - c)) continue;

                cols.add(c);
                pD.add(r + c);
                nD.add(r - c);

                backtrack(r + 1);

                cols.delete(c);
                pD.delete(r + c);
                nD.delete(r - c);

            }
        }

        backtrack(0);

        return res;
    }
}
