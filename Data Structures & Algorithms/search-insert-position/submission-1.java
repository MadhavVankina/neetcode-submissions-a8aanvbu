class Solution {
    public int searchInsert(int[] nums, int target) {
        int l = 0, r = nums.length - 1;

        int res = nums.length;

        while(l <= r){
            int m = (l + r) / 2;
            if(nums[m] == target){
                return m;
            }

            if(nums[m] > target){
                res = m;
                r = m - 1;
            }else{
                l = m + 1;
            }
        }

        return res;
    }
}