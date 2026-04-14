class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // [1,2,3]
    // [-,-,-]
    // [3*,2*,1*]
    // []

    // time complexity - n! x n^2 -> n!
    // space complexity - n! x n -> n!
    permute(nums) {
        if(nums.length === 0) return [[]];

        const perms = this.permute(nums.slice(1));
        const res = [];
        
        for(let p of perms){
            for(let i = 0; i <= p.length; i++){
                let p_copy = p.slice();
                p_copy.splice(i, 0, nums[0])
                res.push(p_copy);
            }
        }

        return res;
    }
}
