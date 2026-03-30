class Solution {
    List<List<Integer>> res;
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        res = new ArrayList<List<Integer>>();
        List<Integer> curr = new ArrayList<>();
        Arrays.sort(nums);
        backtrack(nums, curr, 0);
        return res; 
    }

    private void backtrack(int[] nums, List<Integer> curr, int i){
        if(i == nums.length){
            res.add(new ArrayList<>(curr));
            return;
        }

        curr.add(nums[i]);
        backtrack(nums, curr, i + 1);
        curr.remove(curr.size() - 1);

        while(i + 1 < nums.length && nums[i] == nums[i + 1]) i++;
        backtrack(nums, curr, i + 1);
    }
}
