class Solution {
    public boolean hasDuplicate(int[] nums) {
        HashSet<Integer> set = new HashSet<>();
        int i = 0;

        while(i < nums.length){
            if(set.contains(nums[i])){
                return true;
            }

            set.add(nums[i]);
            i++;
        }

        return false;
    }
}
