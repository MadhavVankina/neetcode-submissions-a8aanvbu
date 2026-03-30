class Solution {
    public int rob(int[] nums) {

        if(nums.length == 1){
            return nums[0];
        }

        return Math.max(houseRobber1(Arrays.copyOfRange(nums, 1, nums.length)), houseRobber1(Arrays.copyOfRange(nums, 0, nums.length - 1)));
        
    }

    private int houseRobber1(int[] nums){
        int rob1 = 0, rob2 = 0;

        for(int n : nums){
            int temp = Math.max(n + rob1, rob2);
            rob1 = rob2;
            rob2 = temp;
        }

        return rob2;
    }
}
