class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        

        List<List<Integer>> res = new ArrayList<>();

        for(int i = 0; i < nums.length - 2; i++){
            if(i != 0 && nums[i - 1] == nums[i]){
                continue;
            }

            int target = 0 - nums[i];

            int l = i + 1;
            int r = nums.length - 1;

            while(l < r){
                if(nums[l] + nums[r] < target){
                    l++;
                    continue;
                }

                if(nums[l] + nums[r] > target){
                    r--;
                    continue;
                }

                if(nums[l] + nums[r] == target){
                    List<Integer> curr = new ArrayList<>();

                    curr.add(nums[i]);
                    curr.add(nums[l]);
                    curr.add(nums[r]);

                    res.add(curr);
                    while(l < r && nums[l] == nums[l+1]) l++;
                    while(l < r && nums[r] == nums[r-1]) r--;

                    l++;
                    r--;
                }
            }
        }

        return res;
    }
}
