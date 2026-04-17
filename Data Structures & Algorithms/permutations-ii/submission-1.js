class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    // [1,1,2]
    // p = [1,2] [2, 1]
    // res => [1,1,2] [1,1,2] [1,2,1] [1,2,1] [2,1,1] [2,1,1] 
    // --------
    // [1,2]
    // p -> [2]
    // res => [1,2] [2, 1]
    // --------
    // [2]
    // p -> []
    // res => [[]]

    permuteUnique(nums) {
        nums.sort((a, b) => b - a)
        if(nums.length === 0) return [[]]
        
        const perms = this.permuteUnique(nums.slice(1));
        const res = [];

        for(let p of perms){
            let prev = -1;
            for(let i = 0; i <= p.length; i++){
                if(nums[0] === prev) continue;
                const p_copy = p.slice();
                p_copy.splice(i, 0, nums[0]);
                res.push(p_copy);
                prev = p[i];
            }
        }

        return res;
    }
}
