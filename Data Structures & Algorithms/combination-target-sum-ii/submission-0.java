class Solution {
    List<List<Integer>> res;
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        Arrays.sort(candidates);
        res = new ArrayList<List<Integer>>();
        List<Integer> curr = new ArrayList<>();
        backtract(candidates, target, curr, 0);
        return res;
    }

    private void backtract(int[] nums, int target, List<Integer> curr, int i){
        if(target == 0){
            res.add(new ArrayList(curr));
            return;
        }

        if(target < 0 || i >= nums.length){
            return;
        }

        curr.add(nums[i]);
        backtract(nums, target - nums[i], curr, i + 1);
        curr.remove(curr.size() - 1);
        while (i + 1 < nums.length && nums[i] == nums[i + 1]) {
            i++;
        }
        backtract(nums, target, curr, i + 1);
    }


}
