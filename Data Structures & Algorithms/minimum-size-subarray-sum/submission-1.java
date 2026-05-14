class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int l = 0;
        int r = 0;
        int sum = 0;
        int res = 0;

        while(r < nums.length){
            if(sum >= target){
                res = r - l + 1;
                sum -= nums[l++];
            }else{
                sum += nums[r++];
            }
        }

        return res;
    }
}