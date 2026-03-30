class Solution {
    constructor(){
        this.res = [];
        this.set = new Set();
    }
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const sortedCandidates = candidates.sort((a, b) => a - b);

        this.helper(sortedCandidates, target, 0, []);

        return this.res

    }

    helper(candidates, target, i, curr){
        if(target === 0){
            const newCurr = [...curr];
            const newCurrStr = newCurr.join(',');
            if(!this.set.has(newCurrStr)){
                this.res.push(newCurr);
                this.set.add(newCurrStr);
            }
            
            return;
        }

        if(target < 0 || i >= candidates.length){
            return;
        }

        const currNum = candidates[i];
        curr.push(currNum);
        this.helper(candidates, target - currNum, i + 1, curr);
        curr.pop();
        this.helper(candidates, target, i + 1, curr);
    }
}
