class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        if(k >= nums.length) return false;

        Set<Integer> set = new HashSet<>();

        int l = 0;
        int r = k - 1;

        for(int i = l; i <= r; i++){
            if(set.contains(nums[i])) return true;
            set.add(nums[i]);
        }

        while(r < nums.length){
            set.remove(nums[l++]);
            if(set.contains(nums[r])) return true;
            set.add(nums[r++]);
        }                   

        return false;          
    }
}