class Solution {
    public List<List<Integer>> combinationSum(int[] nums, int target) {
        List<List<Integer>> ans = new ArrayList<List<Integer>>();
        List<Integer> curr = new ArrayList();

        backtrack(nums, target, ans, curr, 0);

        return ans;
    }

    public void backtrack(
        int[] nums,
        int target,
        List<List<Integer>> ans,
        List<Integer> curr,
        int index
    ){
        if(target == 0){
            ans.add(new ArrayList(curr));
        }else if(target < 0 || index >= nums.length){
            return;
        }else{
            curr.add(nums[index]);
            backtrack(nums, target - nums[index], ans, curr, index);

            curr.remove(curr.get(curr.size() - 1));
            backtrack(nums, target, ans, curr, index + 1);
        }
    }
}
