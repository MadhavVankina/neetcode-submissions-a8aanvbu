class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];
        const subset = [];
        this.helper(nums, 0, subset, result);

        return result;
    }

    helper(nums, i, subset, result){
        // base case
        if(i === nums.length){
            result.push([...subset]);
            return;
        }
        subset.push(nums[i]);
        this.helper(nums, i + 1, subset, result);
        subset.pop();
        this.helper(nums, i + 1, subset, result);
    }
}
