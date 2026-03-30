class Solution {

    Map<String, Integer> map;

    public int findTargetSumWays(int[] nums, int target) {
        map = new HashMap<>();
        return dfs(nums, target, 0, 0);
    }

    private int dfs(int[] nums, int target, int i, int total){
        String key = i + "-" + total;

        if(map.containsKey(key)){
            return map.get(key);
        }

        if(i == nums.length){
            if(target == total){
                return 1;
            }else{
                return 0;
            }
        }

        map.put(key, dfs(nums, target, i + 1, total - nums[i]) + dfs(nums, target, i + 1, total + nums[i]));

        return map.get(key);
    }
}
