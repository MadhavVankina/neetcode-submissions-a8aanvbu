class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = [[]];

        for (let i = 0; i < nums.length; i++) {
            let newResult = [];
            while(result.length > 0) {
                let curr = result.pop();
                newResult.push([...curr]);
                newResult.push([...curr, nums[i]]);
            }

            result = [...newResult];
        }


        return result;
    }
}
