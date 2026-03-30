class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> set = new HashSet<>();

        for(int n : nums){
            set.add(n);
        }

        int max = 0;

        for(int n : nums){
            if(!set.contains(n - 1)){
                int len = 1;
                while(set.contains(n + len)){
                    len++;
                }

                max = Math.max(len, max);
            }
        }

        return max;
    }
}
