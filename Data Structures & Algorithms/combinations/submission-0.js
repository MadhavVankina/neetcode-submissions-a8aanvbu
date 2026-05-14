class Solution {
    constructor(){
        this.res = [];
    }
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */

    combine(n, k) {

        this.backtrack(n, k, 1, []);
        return this.res;
    }

    backtrack(n, k, i, curr){
        if(curr.length === k){
            this.res.push([...curr]);
            return;
        }

        if(curr.length >= k || i > n){
            return;
        }

        curr.push(i);
        this.backtrack(n, k, i + 1, curr);
        curr.pop();
        this.backtrack(n, k, i + 1, curr);


    }
}
