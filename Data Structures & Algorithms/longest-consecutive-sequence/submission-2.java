class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> set = new HashSet<>();

        for(int num : nums){
            set.add(num);
        }
        int res = 0;
        for(int num : nums){
            if(!set.contains(num + 1)){
                int len = 1;
                int curr = num;
                while(set.contains(curr - 1)){
                    len++;
                    curr--;
                }

                res = Math.max(res, len);
            }
        }

        return res;
    }
}
