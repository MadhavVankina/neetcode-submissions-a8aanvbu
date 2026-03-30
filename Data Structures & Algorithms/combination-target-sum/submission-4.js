class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = [];
        const backtrack = (nums, target, curr, total, index) => {

            if(total > target){
                return;
            }

            if(total == target){
                result.push(curr);
            }

            for(let i = index; i < nums.length; i++){
                let t = nums[i] + total;
                let c = [...curr, nums[i]];
                backtrack(nums, target, c, t, i);
            }
        }

        backtrack(nums, target, [], 0, 0);
        return result;
    }
}
