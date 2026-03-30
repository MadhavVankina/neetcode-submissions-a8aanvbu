class Solution {
    public int subarraySum(int[] nums, int k) {
        int res = 0, sum = 0;
        Map<Integer, Integer> prefixMap = new HashMap<>();
        prefixMap.put(0, 1);

        for(int n : nums){
            sum += n;
            int diff = sum - k;
            if(prefixMap.containsKey(diff)){
                res += prefixMap.get(diff);
            }

            prefixMap.put(sum, prefixMap.getOrDefault(sum, 0) + 1);
        }

        return res;
        
    }
}