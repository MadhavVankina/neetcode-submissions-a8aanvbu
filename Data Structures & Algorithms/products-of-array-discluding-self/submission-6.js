class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const arr = new Array(nums.length).fill(1);

        for(let i = 1; i < nums.length; i++){
            arr[i] = arr[i - 1] * nums[i - 1]; 
        }

        let postfix = 1;
        for(let i = nums.length - 1; i >= 0; i--){
            arr[i] *= postfix;
            postfix *= nums[i];
        }

        return arr;
    }
}
