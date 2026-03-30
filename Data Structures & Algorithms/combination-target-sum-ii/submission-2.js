class Solution {
    constructor(){
        this.res = [];
        this.cadidates = [];
        this.target = 0;
    }
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        this.candidates = candidates.sort((a, b) => a - b);
        this.target = target;

        this.backtrack([], 0, 0);

        return this.res;

    }

    backtrack(curr, i, sum){
        if(sum == this.target){
            this.res.push([...curr]);
            return;
        }

        if(sum > this.target || i >= this.candidates.length){
            return;
        }

        curr.push(this.candidates[i]);
        this.backtrack(curr, i + 1, sum + this.candidates[i]);
        curr.pop();

        // if (i)th and (i + 1)th are equal and do i + 1
        while((i + 1) < this.candidates.length){
            if(this.candidates[i] !== this.candidates[i + 1]){
                break;
            }

            i++;
        }
        this.backtrack(curr, i + 1, sum);
    }
}
