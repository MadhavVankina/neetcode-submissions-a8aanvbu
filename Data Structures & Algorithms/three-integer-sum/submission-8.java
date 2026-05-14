class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);

        List<List<Integer>> res = new ArrayList();

        for(int i = 0; i < nums.length - 1; i++){
            int target = 0 - nums[i];
            int l = i + 1;
            int r = nums.length - 1;
            
            while(l < r){
                int currSum = nums[l] + nums[r];
                if(currSum < target){
                    l++;
                }else if(currSum > target){
                    r--;
                }else{
                    List list = new ArrayList<>();
                    list.add(nums[i]);
                    list.add(nums[i]);
                    res.add();
                }
            }

        }

        return res;
    }
}
