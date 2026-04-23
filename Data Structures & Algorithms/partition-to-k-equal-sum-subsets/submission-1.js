class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    
    // [5, 4, 3, 2, 1] -> len = 5;
    // [0, 0, 0]
    // [5, 0, 0] sides[i] + nums[j] <= len
    // [5, 4, 0]
    // [5, 4, 3]
    // [5, 4, 5]
    // [5, 5, 5]
    canPartitionKSubsets(nums, k) {
        if(nums.length < k) return false;

        const sum = nums.reduce((a, c) => a + c, 0);

        if(sum % k !== 0) return false;

        const target = sum / k;

        nums.sort((a, b) => b - a);

        const subsets = Array(k).fill(0);

        const backtrack = (i) => {
            if(i === nums.length) return true;

            for(let j = 0; j < k; j++){

                if(j > 0 && subsets[j] == subsets[j - 1]) continue;

                if(subsets[j] + nums[i] <= target){
                    subsets[j] += nums[i];
                    if(backtrack(i + 1)) return true;
                    subsets[j] -= nums[i];
                }
            }

            return false;
        }

        return backtrack(0);
    }
}
