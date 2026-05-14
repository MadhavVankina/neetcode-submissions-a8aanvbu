class Solution {
    public int findDuplicate(int[] nums) {
        int slow = nums[0];
        int fast = nums[1];

        while(slow != fast){
            slow = nums[slow];
            fast = nums[nums[fast]];
        }

        return slow;
    }
}
