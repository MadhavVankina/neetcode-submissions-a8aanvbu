class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */


    generateParenthesis(n) {
        const res = [];
        this.backtrack(0, 0, '', n, res);
        return res;
    }

    backtrack(open, close, curr, n, res){
        if(open === close && close === n){
            res.push(curr);
            return;
        }

        if(open < n){
            const newCurr = curr + '(';
            this.backtrack(open + 1, close, newCurr, n, res);
        }

        if(close < open){
            const newCurr = curr + ')';
            this.backtrack(open, close + 1, newCurr, n, res)
        }
    }
}
