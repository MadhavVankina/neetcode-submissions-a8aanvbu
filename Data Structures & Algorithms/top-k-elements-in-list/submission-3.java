class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        List<Integer>[] freq = new List[nums.length + 1];
        Map<Integer, Integer> map = new HashMap<>();

        for(int i = 0; i < freq.length; i++){
            freq[i] = new ArrayList<>();
        }

        for(int n : nums){
            map.put(n, map.getOrDefault(n, 0) + 1);
        }

        for(Map.Entry<Integer, Integer> entry : map.entrySet()){
            freq[entry.getValue()].add(entry.getKey());
        }

        int index = 0;
        int[] res = new int[k];
        for(int i = freq.length - 1; i > 0 && index < k; i--){
            for(int val : freq[i]){
                res[index++] = val;
                if(index == k){
                    return res;
                }
            }
        }

        return res;
    }
}
